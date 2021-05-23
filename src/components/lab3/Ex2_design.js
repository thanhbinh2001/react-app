import React, { Component } from "react";

export default class Ex2_design extends Component {
  render() {
    return (
      <div>
        <div className="row p-3">
          <div className="col ml-5 pt-3 pb-3 pr-3 pl-3">
            <h3 className="text-center">1. Design on papper</h3>
            <img
              src="images/z-papper.jpg"
              height="270px"
              width="500px"
              alt=""
            />
            <div className="text-center mt-2">
              <button className="btn btn-info ">
                <a href="images/z-papper.jpg" download="19130017-l3-papper">
                  Download
                </a>
              </button>
            </div>
          </div>
          <div className="col ml-5 pt-3 pb-3 pr-3 pl-3 mb-2 ">
            <h3 className="text-center">2. Design on HTML </h3>
            <img src="images/z-html.png" alt="" height="270px" width="500px" />
            <div className="text-center mt-2">
              <button className="btn btn-info">
                <a href="images/z-html.png" download="19130017-l3-html">
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
