import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import configAxios from "./apis/index";
import { Web3Provider } from "./contexts/Web3Provider/provider";

// import { ThemeProvider } from "./contexts/theme";

const CHAIN_IDS = process.env.REACT_APP_CHAIN_IDS.split(",").map((id) =>
  parseInt(id)
);

const MARKET_ADDRESSES = [];
CHAIN_IDS.forEach((chainId, index) => {
  MARKET_ADDRESSES.push(process.env[`REACT_APP_MARKET_ADDRESS_${index}`]);
});
// console.log(CHAIN_IDS, 'MARKET_ADDRESSES', MARKET_ADDRESSES);
configAxios();

ReactDOM.render(
  // <ThemeProvider>
  //   <Web3Provider marketAddresses={MARKET_ADDRESSES} chainIds={CHAIN_IDS}>
  <Web3Provider marketAddresses={MARKET_ADDRESSES} chainIds={CHAIN_IDS}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Web3Provider>,
  document.getElementById("root")
);
