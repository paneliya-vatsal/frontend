import React, { useEffect, useState } from "react";
import "./Addproject.css";
import { ethers } from "ethers";
import CarbonCreditMarket from "A:/Project/Contract/frontend/src/ABI/CarbonCreditMarket.json";

function Addproject() {
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
        const accounts = await provider.listAccounts({
          method: "eth_requestAccounts",
        });
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

  const [owner, setowner] = useState();
  const [ProjectName, setProjectName] = useState();
  const [TotalCredit, setTotalCredit] = useState();
  const [RetirementTimestamp, setTetirementTimeStamp] = useState();

  const handleChangeOwner = (event) => {
    setowner(event.target.value);
  };

  const handleChangeProject = (event) => {
    setProjectName(event.target.value);
  };

  const handleChangeTotalCredit = (event) => {
    setTotalCredit(event.target.value);
  };

  const handleChangeTotalReTimeStamp = (event) => {
    setTetirementTimeStamp(event.target.value);
  };

  const handleclick = async (e) => {
    e.preventDefault();
    try {
      if (contract && provider) {
        const signer = provider.getSigner();
        const result = await contract
          .connect(signer)
          .addProject(owner, ProjectName, TotalCredit, RetirementTimestamp);
        console.log("contract result", result);
      }
    } catch (error) {
      console.error("Error calling contract function:", error);
    }
  };

  return (
    <div className="main_container">
      <h1></h1>
      <h2>Add Project</h2>
      <div>
        <form className="form">
          <label> Register Project </label>
          <div className="formcom">
            <label>
              Owner
              <input
                type="text"
                name="owner"
                value={owner}
                onChange={handleChangeOwner}
              />
            </label>
          </div>
          <div className="formcom">
            <label>
              Project Name
              <input
                type="text"
                name="ProjectName"
                value={ProjectName}
                onChange={handleChangeProject}
              />
            </label>
          </div>
          <div className="formcom">
            <label>
              TotalCredit
              <input
                type="text"
                name="TotalCredit"
                value={TotalCredit}
                onChange={handleChangeTotalCredit}
              />
            </label>
          </div>
          <div className="formcom">
            <label>
              Retirement Timestamp
              <input
                type="text"
                name="RetirementTimestamp"
                value={RetirementTimestamp}
                onChange={handleChangeTotalReTimeStamp}
              />
            </label>
          </div>
          <div>
            <label>
              <button
                className="btn"
                id="btn1"
                type="submit"
                onClick={handleclick}
              >
                Submit
              </button>
            </label>
          </div>
        </form>
      </div>
      <div className="project_description"></div>
    </div>
  );
}

export default Addproject;
