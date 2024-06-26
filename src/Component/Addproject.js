import React, { useEffect, useState } from "react";
import "./Addproject.css";
import { getContract, getProvider, getSigner } from "./Connect";
import carbonCreditMarket from "A:/Project/Contract/frontend/src/ABI/CarbonCreditMarket.json";

function Addproject() {
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
          const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Replace with your contract address
          // const abi = carbonCreditMarket; // Replace with your contract ABI
          const contractInstance = await getContract(
            contractAddress,
            carbonCreditMarket
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
