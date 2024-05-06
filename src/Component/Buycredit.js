import React, { useState, useEffect } from "react";
import { getContract, getProvider, getSigner } from "./Connect";
import carbonCreditMarket from "A:/Project/Contract/frontend/src/ABI/CarbonCreditMarket.json";

function Buycredit() {
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

  const [_projectId, setProjectId] = useState();
  const [_projectName, setProjectName] = useState();
  const [_carbonReduction, setCarbonReduction] = useState();
  const [_retirementTime, setRetirementTime] = useState();

  const handleChangeOwner = (event) => {
    setProjectId(event.target.value);
  };

  const handleChangeProject = (event) => {
    setProjectName(event.target.value);
  };

  const handleChangeTotalCredit = (event) => {
    setCarbonReduction(event.target.value);
  };

  const handleChangeTotalReTimeStamp = (event) => {
    setRetirementTime(event.target.value);
  };

  const handleclick = async (e) => {
    e.preventDefault();
    try {
      if (contract && provider) {
        const signer = provider.getSigner();
        const result = await contract
          .connect(signer)
          .claimCredits(
            _projectId,
            _projectName,
            _carbonReduction,
            _retirementTime,
            { gasLimit: 2000000 }
          );
        console.log("contract result", result);
      }
    } catch (error) {
      console.error("Error calling contract function:", error);
    }
  };

  const HandleClick = async () => {
    try {
      if (contract && provider) {
        const signer = provider.getSigner();
        const tx = await contract
          .connect(signer)
          ._Transfer({ gasLimit: 2000000 });
        console.log("transcation sucessfull", tx);
      }
    } catch (error) {
      console.log("transaction faild", error);
    }
  };
  return (
    <div className="main_container">
      <button className="btn" onClick={HandleClick}>
        Transfer
      </button>
      <h2>List Credit</h2>
      <div>
        <form className="form">
          <div className="formcom">
            <label>
              Project Id
              <input
                type="text"
                name="_projectId"
                value={_projectId}
                onChange={handleChangeOwner}
              />
            </label>
          </div>
          <div className="formcom">
            <label>
              Project Name
              <input
                type="text"
                name="_projectName"
                value={_projectName}
                onChange={handleChangeProject}
              />
            </label>
          </div>
          <div className="formcom">
            <label>
              Carbon Reduction
              <input
                type="text"
                name="_carbonReduction"
                value={_carbonReduction}
                onChange={handleChangeTotalCredit}
              />
            </label>
          </div>
          <div className="formcom">
            <label>
              Retirement Timestamp
              <input
                type="text"
                name="_retirementTime"
                value={_retirementTime}
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

export default Buycredit;
