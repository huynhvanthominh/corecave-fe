import React, { useEffect, useState } from "react";
import { jwtManager } from '../../helpers/jwtManager';
import { ethers } from 'ethers';
// import { Signer } from 'ethers';
import collectionABIs  from '../../contracts/ERC1155Collection.sol/ERC1155Collection.json';
import marketABIs from '../../contracts/LazyMaketplace.sol/LazyMarketplace.json';
import Web3Context from "./context";
import configAxios from "../../apis/index"
import walletAPI from "../../apis/wallet";

function Web3Provider(props){
    // console.log(props);
    const { marketAddresses, chainIds } = props;
	const [signer, setSigner] = useState();
	const [user, setUser] = useState();
	const [provider, setProvider] = useState();

	const [marketAddress, setMarketAddress] = useState("");
	const [chainId, setChainId] = useState(0);
	const UNIT = 'PLS';

	async function login() {
		await connectWallet();

		if (!signer) return;
		const address = await signer.getAddress();
		const { data: nonce } = await walletAPI.getNonce(address);
		const signature = await signer.signMessage(nonce);

		const { data: user } = await walletAPI.loginBySign(address, signature);
		jwtManager.set((user).access_token);
		configAxios();
		getUser();
	}

	async function logout() {
		setUser(undefined);
		jwtManager.set('');
		configAxios();
		window.location.reload();
	}
	async function connectWallet() {
		// @ts-ignore
		const provider = new ethers.providers.Web3Provider(window.ethereum)
		await provider.send("eth_requestAccounts", []);

		const signer = provider.getSigner()
		setSigner(signer)
		setProvider(provider)
	}
    async function getUser() {
		walletAPI.getMe().then(({ data }) => {
			setUser(data);
			connectWallet();
		}).catch(err => {
			jwtManager.clear();
		})
	}
    function isValidChain() {
		if (!provider) return false;
		const currentChainId = provider?.network?.chainId;
		// return +currentChainId === +chainId;
		return true;
	}
    async function loadSigner(provider) {
		// check if provider is Web3Provider
		if (!(provider)) return;
		await provider.send("eth_requestAccounts", []);
		const signer = provider.getSigner()
		setSigner(signer)
	}

    useEffect(() => {
		getUser();
		// @ts-ignore
		if (!window.ethereum) {
			setProvider(undefined);
		} else {
			// @ts-ignore
			const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
			setProvider(provider);
		}
	}, []);
    useEffect(() => {
		provider?.getNetwork().then((network) => {
			setChainId(+network.chainId);
			const chainIndex = chainIds.findIndex((id) => id === +network.chainId);
			loadSigner(provider);
			if (chainIndex !== -1) {
				setMarketAddress(marketAddresses[chainIndex]);
			} else {
				alert('This network is not supported');
			}
		});
	}, [provider]);
    useEffect(() => {
		// @ts-ignore
		if (!window.ethereum) {
			setProvider(undefined);
		} else {
			// @ts-ignore
			window.ethereum.on('chainChanged', function (networkId) {
				window.location.reload();
				// @ts-ignore
				const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
				setProvider(provider);
			});

			// @ts-ignore
			window.ethereum.on('accountsChanged', function (accounts) {
				logout();
			});
		}
	}, []);
	const marketABI = marketABIs.abi;
	const collectionABI = collectionABIs.abi;
    //return
    return (
		<Web3Context.Provider value={{
			UNIT,
			user,
			signer,
			provider,
			chainIds,
			marketAddresses,
			marketABI,
			collectionABI,
			login,
			logout,
			isValidChain,
			marketAddress,
			chainId,
		}}>
			{props.children}
		</Web3Context.Provider>
	);
}
function useWeb3() {
	const context = React.useContext(Web3Context);
	if (context === undefined) {
		throw new Error("Error in useWeb3");
	}
	return context;
}

export { Web3Provider, useWeb3 };