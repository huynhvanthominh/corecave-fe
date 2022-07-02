import axios from 'axios';
import queryString from 'query-string';


export const followers = async (id, userId) => axios.get(`/nfts/followers/${id}/${userId}`)

export const increaseViewSale = async (id) => await axios.post("/nfts/sales/increase-view/", {
    id
})

export async function listMarket(page = 1, limit = 20) {
    return axios.get(`/nfts/sales`, {
        params: {
            page,
            limit,
        },
    });
}

export function searchNFT(params, page = 1, limit = 20) {
    const paramsString = queryString.stringify({ ...params, page, limit });
    return axios.get(`/nfts/sales/search?${paramsString}`);
}

export async function listTopSeller() {
    return axios.get(`/nfts/topseller`);
}

export async function getFeature() {
    return axios.get(`/nfts/feature`);
}

export async function listByUser(userId, type = 'owned', search) {
    return axios.get(`users/${userId}/nfts`, {
        params: {
            type,
            search,
        },
    });
}

export async function refreshUri(id) {
    // return axios.get(`nfts/${id}/refresh`);
    return { data: undefined };
}

export async function randomMeta(total) {
    return axios.post(`nfts/metadata`, { total });
}

export async function getNft(id) {
    return axios.get(`nfts/${id}`);
}

export async function getBids(saleId) {
    return axios.get(`nfts/sales/${saleId}/bids`);
}

export async function crawl(transactionHash, chainId, address) {
    return axios.post(`nfts/crawl`, {
        transactionHash,
        chainId,
        address,
    });
}

export async function createSaleLazy(payload) {
    return axios.post(`nfts/lazy`, payload);
}

export async function takeOffSaleLazy(id) {
    return axios.delete(`nfts/lazy/${id}`);
}

export async function importNft(ownerAddress, tokenAddress, tokenId, chainId) {
    return axios.post(`nfts/import`, { ownerAddress, tokenAddress, tokenId, chainId });
}