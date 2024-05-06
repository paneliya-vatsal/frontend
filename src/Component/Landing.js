import React, { useState, useEffect } from "react";
import "./Landing.css";
import { getContract, getProvider, getSigner } from "./Connect";
import SustainaToken from "A:/Project/Contract/frontend/src/ABI/SustainaToken.json";

function Landing() {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    // Call the function to get the provider
    const connectToProvider = async () => {
      try {
        const providerInstance = await getProvider();
        setProvider(providerInstance);
      } catch (error) {
        console.error("Error connecting to provider:", error);
      }
    };

    connectToProvider();
  }, []);

  useEffect(() => {
    if (provider) {
      // Call the function to get the signer
      const connectToSigner = async () => {
        try {
          const signerInstance = await getSigner();
          setSigner(signerInstance);
        } catch (error) {
          console.error("Error connecting to signer:", error);
        }
      };

      connectToSigner();
    }
  }, [provider]);
  useEffect(() => {
    if (provider && signer) {
      // Call the function to get the contract instance
      const connectToContract = async () => {
        try {
          const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your contract address
          // const abi = carbonCreditMarket; // Replace with your contract ABI
          const contractInstance = await getContract(
            contractAddress,
            SustainaToken
          );
          setContract(contractInstance);
          console.log("Contract connected:", contractInstance);
        } catch (error) {
          console.error("Error connecting to contract:", error);
        }
      };

      connectToContract();
    }
  }, [provider, signer]);

  let carbonTokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const handleClick = async () => {
    try {
      if (contract && provider) {
        const signer = provider.getSigner();
        const tx = await contract
          .connect(signer)
          .approve(carbonTokenAddress, 10000, {
            gasLimit: 2000000,
          });
        console.log("transaction Sucessfull", tx);
      }
    } catch (error) {
      console.error("transaction unsucessfull", error);
    }
  };

  const HandleClick = async () => {
    try {
      if (contract && provider) {
        const signer = provider.getSigner();
        const tx = await contract
          .connect(signer)
          .tokenTransfer(carbonTokenAddress, 10000, {
            gasLimit: 2000000,
          });
        console.log("transcation sucessfull", tx);
      }
    } catch (error) {
      console.log("transaction faild", error);
    }
  };

  return (
    <div className="body">
      <div className="text">
        <h2>
          "Unlocking a Sustainable Tomorrow: Join Our Revolutionary
          Blockchain-Based Carbon Credit Trading Platform to Trade Carbon
          Credits and Directly Invest in Cutting-Edge Renewable Energy
          Generation Projects, Paving the Way for a Greener, More Sustainable
          Future."
        </h2>
        <img src="./wind farm.png" alt="wind farm" className="windImg" />
      </div>

      <div className="core">
        <h1>"Empowering Sustainable Future : Trade Carbon Cedit"</h1>
        <button className="btn" onClick={handleClick}>
          {" "}
          approve{" "}
        </button>
        <button className="btn" onClick={HandleClick}>
          {" "}
          Transfer{" "}
        </button>
      </div>
    </div>
  );
}

export default Landing;
