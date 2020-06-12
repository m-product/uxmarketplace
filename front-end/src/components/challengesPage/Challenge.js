import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";

const Challenge = ({ title, brief, description }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="container w-75"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <div className="row rounded-lg bg-light mt-3">
          <div className="col-auto p-4">
            <h3>{title}</h3>
            <p className="text-muted">{brief}</p>
          </div>
          <div className="col">
            <img
              className="float-right"
              src={require("/Users/maxwalts/Desktop/mproduct/uxmarketplace/front-end/src/assets/tempimage.png")}
              alt="logo"
              width="200"
              height="125"
            />
          </div>
        </div>
      </div>
      <Collapse in={open}>
        <div className="container w-75 bg-light">
          <div className="row">
            <div className="col p-4">
              <p className="text-muted">{description}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-auto p-4">
              <button className="btn btn-primary purple">
                Upload Design Response
              </button>
            </div>
            <div className="col-auto p-4">
              <Link to="/project-response-list">
                <button className="btn btn-outline-primary purple">
                  See Other Responses
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
};

export default Challenge;
