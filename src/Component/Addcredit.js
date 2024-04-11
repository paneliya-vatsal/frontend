import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./Addcredit.css";
import carbonCreditMarket from "A:/Project/Contract/frontend/src/ABI/CarbonCreditMarket.json";

function Addcredit() {
  const [account, setAccount] = useState();
  const [provider, setProvider] = useState();
  const [contract, setContract] = useState();

  useEffect(() => {
    if (typeof window.ethereum !== undefined) {
      const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(ethProvider);
    } else {
      console.log("Metamask is not installed");
    }
  }, []);

  useEffect(() => {
    const fatchAccount = async () => {
      if (provider) {
        const accounts = await provider.listAccount({
          method: "eth_requestAccount",
        });
        if (accounts.length > 0) {
          setAccount(account[0]);
        }
      }
    };
    fatchAccount();
  }, [provider]);

  useEffect(() => {
    if (provider) {
      const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
      const contractABI = carbonCreditMarket;

      const contractInstance = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );
      setContract(contractInstance);
    }
  }, [provider]);
  return (
    <div className="container">
      <form className="form">
        <label> List Your Credit </label>
        <div className="formcom">
          <label>
            Project Id
            <input type="text"></input>
          </label>
        </div>
        <div className="formcom">
          <label>
            Project Description
            <input></input>
          </label>
        </div>
        <div className="formcom">
          <label>
            Project Manager
            <input type="text" />
          </label>
        </div>
        <div className="formcom">
          <label>
            Budget
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            <button className="btn" id="btn1">
              Submit
            </button>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Addcredit;
