import React from "react";
import "./Addproject.css";

function Addproject() {
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
              <input type="text" name="ProjectName" />
            </label>
          </div>
          <div className="formcom">
            <label>
              Project Name
              <input type="text" name="TotalCredit" />
            </label>
          </div>
          <div className="formcom">
            <label>
              Total Credit
              <input type="text" name="CreditAvailable" />
            </label>
          </div>
          <div className="formcom">
            <label>
              Retirement Timestamp
              <input type="text" name="RetirementTimestamp" />
            </label>
          </div>
          <div>
            <label>
              <button className="btn" id="btn1" type="submit">
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
