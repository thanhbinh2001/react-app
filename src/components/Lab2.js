import React, { Component } from "react";
import Lab2_design from "./lab2/Lab2_design";
import Lab2_requirement from "./lab2/Lab2_requirement";
import Lab2_implement from "./lab2/Lab2_implement";
// import Lab2_Sce from "./lab2/Lab2_Sce";

export default class Lab2 extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb" className="mt-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Lab 2
            </li>
          </ol>
        </nav>
        {/* Tabs */}
        <section
          className="mr-5 ml-5 tabs-section"
        >
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
                href="#nav-user-lab"
                role="tab"
                aria-controls="nav-user"
                aria-selected="false"
              >
                User Scenario
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
                Design
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
                Implement
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
              <Lab2_requirement />
            </div>
            <div
              className="tab-pane fade"
              id="nav-user-lab"
              role="tabpanel"
              aria-labelledby="nav-user-tab"
            >
              <img src="images\lab2.png" alt="Image user scenario" />
            </div>
            <div
              className="tab-pane fade"
              id="nav-design-lab"
              role="tabpanel"
              aria-labelledby="nav-design-tab"
            >
              <Lab2_design />
            </div>

            {/* implement */}
            <div
              className="tab-pane fade"
              id="nav-implement-lab"
              role="tabpanel"
              aria-labelledby="nav-implement-tab"
            >
              <Lab2_implement />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
