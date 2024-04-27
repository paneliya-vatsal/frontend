import React, { useState, useEffect } from "react";
import { getContract, getProvider, getSigner } from "./Connect";
import carbonCreditMarket from "A:/Project/Contract/frontend/src/ABI/CarbonCreditMarket.json";
import "./Projects.css";
import Buycredit from "./Buycredit";
import { Link } from "react-router-dom";

function Projects() {
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
          //   const abi = carbonCreditMarket; // Replace with your contract ABI
          const contractInstance = await getContract(
            contractAddress,
            carbonCreditMarket
          );
          setContract(contractInstance);
          console.log("Contract connected");
        } catch (error) {
          console.error("Error connecting to contract:", error);
        }
      };

      connectToContract();
    }
  }, [provider, signer]);

  const [projectIds, setProjectIds] = useState();
  const [projectDetails, setProjectDetails] = useState([]);

  const handleClick = async () => {
    try {
      const projectCount = await contract.connect(signer).getCounter();
      console.log(parseInt(projectCount));
      setProjectIds(parseInt(projectCount));
    } catch (error) {
      console.log("counter problem");
    }
  };

  const fetchAllProject = async () => {
    try {
      const signer = provider.getSigner();

      const projectsData = await contract.connect(signer).fetchAllProjects();
      const projectsArray = projectsData.map((project) => ({
        owner: project[0],
        projectName: project[1],
        totalCredit: project[2],
        retirementTimestamp: project[3],
      }));
      console.log(projectsArray);
      setProjectDetails(projectsArray);
    } catch (error) {
      console.error("Error fetching project details:", error);
    }
  };

  return (
    <div className="main">
      <div>
        <button type="submit" onClick={fetchAllProject}>
          submit
        </button>
        <button type="submit" onClick={handleClick}>
          count
        </button>

        <div className="main2">
          <h1>All Project Details</h1>
          <div className="min3">
            {projectDetails.map((project, index) => (
              <div key={index} className="min2">
                <h2>{project.projectName}</h2>
                <div className="min">
                  <p>Owner: {project.owner}</p>
                  <p>Project Name: {project.projectName}</p>
                  <p>Total Credit: {parseInt(project.totalCredit)}</p>
                  <p>
                    Retirement Timestamp:{" "}
                    {parseInt(project.retirementTimestamp)}
                  </p>
                </div>
                <li>
                  <Link to="/Buycredit" className="btn">
                    Buy Credit
                  </Link>
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
