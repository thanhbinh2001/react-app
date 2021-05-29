import React, { Component } from "react";

export default class Content2 extends Component {
  render() {
    return (
      <div>
        <div className="row p-3">
          <div className="col ml-5">
            <h3 className="text-center">1. Design on papper</h3>
            <img src="images/l1-1.jpg" height="400px" width="500px" alt="" />
            <div className="text-center mt-2">
              <button className="btn btn-info ">
                <a href="images/l1-1.jpg" download="19130017-l1-1-papper">
                  Download
                </a>
              </button>
            </div>
          </div>
          <div className="col ml-5 mb-2 ">
            <h3 className="text-center">1. Design on papper </h3>
            <img src="images/l1-2.jpg" alt="" height="400px" width="500px" />
            <div className="text-center mt-2">
              <button className="btn btn-info">
                <a href="images/l1-2.jpg" download="19130017-l1-2-papper">
                  {" "}
                  Download{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="row p-3">
          <div className="col ml-5">
            <h3 className="text-center">2. Design on HTML</h3>
            <img
              src="images/l1-1-html.png"
              height="400px"
              width="100%"
              alt=""
            />
            <div className="text-center mt-2">
              <button className="btn btn-info ">
                <a href="images/l1-1-html.png" download="19130017-l1-1-html">
                  Download
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="row p-3">
          <div className="col ml-5">
            <h3 className="text-center">2. Design on HTML</h3>
            <img
              src="images/l1-2-html.png"
              height="400px"
              width="100%"
              alt=""
            />
            <div className="text-center mt-2">
              <button className="btn btn-info ">
                <a href="images/l1-2-html.png" download="19130017-l1-2-html">
                  Download
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
