import React, { Component } from "react";

export default class Lab2_design extends Component {
  render() {
    return (
      <div>
        <div className="row p-3">
          <div className="col ml-5">
            <h3 className="text-center">1. Design on papper</h3>
            <img
              src="images/l2-papper.jpg"
              height="400px"
              width="500px"
              alt=""
            />
            <div className="text-center mt-2">
              <button className="btn btn-info ">
                <a href="images/l2-papper.jpg" download="19130017-l2-papper">
                  Download
                </a>
              </button>
            </div>
          </div>
          <div className="col ml-5 mb-2 ">
            <h3 className="text-center">2. Design on HTML </h3>
            <img src="images/l2-html.png" alt="" height="400px" width="500px" />
            <div className="text-center mt-2">
              <button className="btn btn-info">
                <a href="images/l2-html.png" download="19130017-l2-html">
                  {" "}
                  Download{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
