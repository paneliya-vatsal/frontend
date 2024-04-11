import React from "react";
import "./Addcredit.css";

function Addcredit() {
  return (
    <div className="container">
      <form className="form">
        <label> Register Project </label>
        <div className="formcom">
          <label>
            Project Name
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
