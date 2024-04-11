// import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import CarbonCreditMarket from "A:/Project/Contract/frontend/src/ABI/CarbonCreditMarket.json";

// const Connection = (CONTRACT_ADDRESS, CarbonCreditMarket, library) => {
//   const [contract, setContract] = useState(null);

//   useEffect(() => {
//     if (library) {
//       const provider = new ethers.providers.Web3Provider(library.provider);
//       const signer = provider.getSigner();
//       const contractInstance = new ethers.Contract(
//         CONTRACT_ADDRESS,
//         CarbonCreditMarket,
//         signer
//       );
//       setContract(contractInstance);
//     }
//   }, [library, CONTRACT_ADDRESS, CarbonCreditMarket]);
//   return contract;
// };

// export default Connection;

// // function connection({ Children }) {
// //   const [state, setState] = useState({
// //     provider: null,
// //     signer: null,
// //     contract: null,
// //   });
// //   const [account, setAccount] = useState("not connected");

// //   useEffect(() => {
// //     const template = async () => {
// //       const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
// //       const contractAbi = CarbonCreditMarket.CarbonCreditMarket;

// //       const { ethereum } = window;
// //       const account = await ethereum.request({
// //         method: "eth_requestAccounts",
// //       });

// //       setAccount(account);
// //       const provider = new ethers.providers.Web3Provider(window.ethereum);
// //       const signer = provider.getSigner();

// //       const contract = new ethers.Contract(
// //         contractAddress,
// //         contractAbi,
// //         signer
// //       );

// //       setState({ provider, signer, contract });
// //     };
// //     template();
// //   }, []);

// //   const Addproject = async (
// //     owner,
// //     ProjectName,
// //     TotalCredit,
// //     RetirementTimestamp
// //   ) => {
// //     const web3 = new web3();
// //     const connections = await web3.connect();
// //     const provider = new ethers.providers.Web3Provider(connections);
// //     const signer = provider.getSigner();
// //     const contract = fetchContract(signer);

// //     const data = Json.stringify({
// //       owner,
// //       ProjectName,
// //       TotalCredit,
// //       RetirementTimestamp,
// //     });

// //     const project = await contract.addProject(
// //       owner,
// //       ProjectName,
// //       TotalCredit,
// //       RetirementTimestamp
// //     );
// //     project.wait();
// //     console.log(project);
// //   };
// //   return (
// //     <carbonContext
// //       values={{
// //         template,
// //         Addproject,
// //       }}
// //     >
// //       {Children}
// //     </carbonContext>
// //   );
// // }

// // export default connection;
