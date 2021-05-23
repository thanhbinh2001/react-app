import React, { Component } from "react";
import Ex2_implement from "./lab3/Ex2_implement";
import F_pattern from "./lab3/F_pattern";
import Lab3_fpattern from "./lab3/Lab3_fpattern";
import Lab3_requirement from "./lab3/Lab3_requirement";
import Lab3_zpattern from "./lab3/Lab3_zpattern";
import Z_pattern from "./lab3/Z_pattern";
export default class Lab3 extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb" className="mt-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Lab 3
            </li>
          </ol>
        </nav>
        {/* Tabs */}
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
                href="#nav-design-lab"
                role="tab"
                aria-controls="nav-design"
                aria-selected="false"
              >
                F-Pattern
              </a>
              <a
                className="nav-item nav-link actice"
                id="nav-implement-tab"
                data-toggle="tab"
                href="#nav-implement-lab"
                role="tab"
                aria-controls="nav-implement"
                aria-selected="false"
              >
                Z-pattern
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
              <Lab3_requirement />
            </div>
            <div
              className="tab-pane fade"
              id="nav-design-lab"
              role="tabpanel"
              aria-labelledby="nav-design-tab"
            >
              {/* <Lab3_fpattern /> */}
              <F_pattern />
            </div>
            <div
              className="tab-pane fade"
              id="nav-implement-lab"
              role="tabpanel"
              aria-labelledby="nav-implement-tab"
            >
              <Z_pattern />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
