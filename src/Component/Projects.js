import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./Projects.css";
import CarbonCreditMarket from "A:/Project/Contract/frontend/src/ABI/CarbonCreditMarket.json";

function Projects() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(ethProvider);
    } else {
      console.log("metamask is not connected");
    }
  }, []);

  useEffect(() => {
    // Get the connected account
    const fetchAccount = async () => {
      if (provider) {
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      }
    };

    fetchAccount();
  }, [provider]);

  useEffect(() => {
    // Instantiate the contract
    if (provider) {
      const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
      const contractABI = CarbonCreditMarket; // Your contract ABI

      const contractInstance = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );
      setContract(contractInstance);
    }
  }, [provider]);

  const [projectId, setProjectId] = useState();

  const handleChangeProjectId = (event) => {
    setProjectId(event.target.value);
  };

  const handleclick = async (e) => {
    e.preventDefault();
    try {
      if (contract && provider) {
        const signer = provider.getSigner();
        const result = await contract.connect(signer).getProjectData(projectId);
        const [Owner, ProjectName, TotalCredit, RetirementTimestamp] = result;
        console.log("Owner:", Owner);
        console.log("Project Name:", ProjectName);
        console.log("Total Credit:", TotalCredit);
        console.log("RetirementTimestamp", RetirementTimestamp);
      }
    } catch (error) {
      console.error("Error calling contract function:", error);
    }
  };

  return (
    <div className="min">
      <h1>owner : </h1>
      <h1>project name :</h1>
      <h1>Total Credit :</h1>
      <h1>Retirement Timestamp :</h1>

      <input
        type="text"
        name="projectId"
        value={projectId}
        onChange={handleChangeProjectId}
      ></input>
      <div>
        <button type="submit" onClick={handleclick}>
          submit
        </button>
      </div>
    </div>
  );
}

export default Projects;
