import React, { Component } from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Lab2_design from "./Lab2_design";
import Lab2_implement from "./Lab2_implement";
import Lab2_requirement from "./Lab2_requirement";

export default class Tabs extends Component {
  render() {
    return (
      <div>
        {/* Tabs */}

        <section
          style={{ marginTop: "105px" }}
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
              <Content1 />
              {/* <Lab2_implement /> */}
            </div>
            <div
              className="tab-pane fade"
              id="nav-design-lab"
              role="tabpanel"
              aria-labelledby="nav-design-tab"
            >
              <Content2 />
              {/* <Lab2_design /> */}
            </div>
            <div
              className="tab-pane fade"
              id="nav-implement-lab"
              role="tabpanel"
              aria-labelledby="nav-implement-tab"
            >
              <Content3 />
              {/* <Lab2_requirement /> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
