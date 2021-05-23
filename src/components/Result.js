import React, { Component } from "react";
import Cumulative from "./result/Cumulative";
import Evaluate from "./result/Evaluate";
import Requirement from "./result/Requirement";

export default class Result extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb" className="mt-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Result
            </li>
          </ol>
        </nav>
        <section className="mr-5 ml-5 tabs-section">
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home-lab"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Requirement
              </a>
              <a
                className="nav-item nav-link actice"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-evaluate-lab"
                role="tab"
                aria-controls="nav-evaluate"
                aria-selected="false"
              >
                Evaluate
              </a>
              <a
                className="nav-item nav-link actice"
                id="nav-cumulativelessons-tab"
                data-toggle="tab"
                href="#nav-cumulativelessons-lab"
                role="tab"
                aria-controls="nav-cumulativelessons"
                aria-selected="false"
              >
                Cumulative lessons
              </a>
            </div>
          </nav>
          <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home-lab"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <Requirement />
            </div>
            <div
              className="tab-pane fade"
              id="nav-evaluate-lab"
              role="tabpanel"
              aria-labelledby="nav-evaluate-tab"
            >
              <Evaluate />
            </div>
            {/* cumulativelessons */}
            <div
              className="tab-pane fade"
              id="nav-cumulativelessons-lab"
              role="tabpanel"
              aria-labelledby="nav-cumulativelessons-tab"
            >
              <Cumulative />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
