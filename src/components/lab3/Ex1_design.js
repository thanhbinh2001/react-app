import React, { Component } from "react";

export default class Ex1_design extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row p-3">
            <div className="col ml-5 pt-3 pb-3 pr-3 pl-3">
              <h3 className="text-center">1. Design on papper</h3>
              <img
                src="images/f-papper.jpg"
                height="400px"
                width="480px"
                alt=""
              />
              <div className="text-center mt-2">
                <button className="btn btn-info ">
                  <a href="images/f-papper.jpg" download="19130017-l3-f-papper">
                    Download
                  </a>
                </button>
              </div>
            </div>
            <div className="col ml-5 pt-3 pb-3 pr-3 pl-3 mb-2 ">
              <h3 className="text-center">2. Design on HTML </h3>
              <img
                src="images/f-html.png"
                alt=""
                height="400px"
                width="480px"
              />
              <div className="text-center mt-2">
                <button className="btn btn-info">
                  <a href="images/f-html.png" download="19130017-l3-f-html">
                    {" "}
                    Download{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
