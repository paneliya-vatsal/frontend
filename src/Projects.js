import React, { useState, useEffect, Link } from "react";
import { ethers } from "ethers";
import "./Projects.css";
import CarbonCreditMarket from "A:/Project/Contract/frontend/src/ABI/CarbonCreditMarket.json";

function Projects() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [CC_Trade, setCC_Trade] = useState(null);

  const connectToBlockchian = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);

    const network = await provider.getNetwork();
    console.log(network);

    const CC_Trade = new ethers.Contract(
      "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      CarbonCreditMarket,
      provider
    );
    setCC_Trade(CC_Trade);

    // Load listed projects

    const projects = [];
    for (var i = 0; i < 9; i++) {
      const project = await CC_Trade.projects(i + 1);
      projects.push(project);
    }
  };

  useEffect(() => {
    connectToBlockchian();
  }, []);

  return (
    <div>
      <lable> vatsal paneliya </lable>
      <li>
        <Link to="/Addproject"> Add Project</Link>
      </li>
    </div>
  );
}

export default Projects;
