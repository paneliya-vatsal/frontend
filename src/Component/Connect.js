import { ethers } from "ethers";
import carbonCreditMarket from "A:/Project/Contract/frontend/src/ABI/CarbonCreditMarket.json";

// Function to connect to the Ethereum network and return the provider
export const getProvider = () => {
  // Check if the browser has injected web3
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return provider;
  } else {
    throw new Error("No Ethereum provider found. Please install MetaMask.");
  }
};

// Function to get the signer
export const getSigner = async () => {
  const provider = getProvider();
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  return signer;
};

// Function to get the contract instance
export const getContract = async (Contract_Address, CarbonCreditMarket) => {
  const provider = getProvider();
  const signer = await getSigner();
  const contract = new ethers.Contract(Contract_Address, CarbonCreditMarket);
  return contract;
};

// import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import CarbonCreditMarket from "A:/Project/Contract/frontend/src/ABI/CarbonCreditMarket.json";

// function Connect() {
//   const [provider, setProvider] = useState();
//   const [account, setAccount] = useState();
//   const [contract, setContract] = useState();

//   useEffect(() => {
//     if (typeof window.ethereum !== "undefined") {
//       const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
//       setProvider(ethProvider);
//     } else {
//       console.log("metamask is not connected");
//     }
//   }, []);

//   useEffect(() => {
//     // Get the connected account
//     const fetchAccount = async () => {
//       if (provider) {
//         const accounts = await provider.listAccounts({
//           method: "eth_requestAccounts",
//         });
//         if (accounts.length > 0) {
//           setAccount(accounts[0]);
//         }
//       }
//     };

//     fetchAccount();
//   }, [provider]);

//   useEffect(() => {
//     // Instantiate the contract
//     if (provider) {
//       const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
//       const contractABI = CarbonCreditMarket; // Your contract ABI

//       const contractInstance = new ethers.Contract(
//         contractAddress,
//         contractABI,
//         provider
//       );
//       setContract(contractInstance);
//     }
//   }, [provider]);

//   return { provider, account, contract };
// }

// export default Connect();
