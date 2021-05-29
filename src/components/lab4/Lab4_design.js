import React, { Component } from "react";

export default class Lab4_design extends Component {
  render() {
    return (
      <div>
        <div className="row p-3">
          <div className="col ml-5">
            <h3 className="text-center">1. Design on papper</h3>
            <img
              src="images/l4-papper.jpg"
              height="400px"
              width="500px"
              alt=""
            />
            <div className="text-center mt-2">
              <button className="btn btn-info ">
                <a href="images/l4-papper.jpg" download="19130017-l4-1-papper">
                  Download
                </a>
              </button>
            </div>
          </div>

          <div className="col ml-5">
            <h3 className="text-center">1. Design on papper</h3>
            <img
              src="images/l4-papper2.jpg"
              height="400px"
              width="500px"
              alt=""
            />
            <div className="text-center mt-2">
              <button className="btn btn-info ">
                <a href="images/l4-papper2.jpg" download="19130017-l4-2-papper">
                  Download
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* html */}
        <div className="row">
          <div className="col ml-5 mb-2 ">
            <h3 className="text-center">2. Design on HTML </h3>
            <img
              src="images/l4-html1.png"
              alt=""
              height="204px"
              width="500px"
            />
            <div className="text-center mt-2">
              <button className="btn btn-info">
                <a href="images/l4-html1.png" download="19130017-l4-1-html">
                  {" "}
                  Download{" "}
                </a>
              </button>
            </div>
          </div>
          <div className="col ml-5 mb-2 ">
            <h3 className="text-center">2. Design on HTML </h3>
            <img
              src="images/l4-html2.png"
              alt=""
              height="204px"
              width="340px"
            />
            <div className="text-center mt-2">
              <button className="btn btn-info">
                <a href="images/l4-html2.png" download="19130017-l4-2-html">
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
