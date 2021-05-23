import React, { Component } from "react";
import Ex1_design from "./Ex1_design";
import Ex1_implement from "./Ex1_implement";

export default class F_pattern extends Component {
  render() {
    return (
      <div>
        <div>
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link actice"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-design-f-pattern-lab"
                role="tab"
                aria-controls="nav-design-f-pattern"
                aria-selected="false"
              >
                Design
              </a>
              <a
                className="nav-item nav-link actice"
                id="nav-f-pattern-tab"
                data-toggle="tab"
                href="#nav-f-pattern-lab"
                role="tab"
                aria-controls="nav-f-pattern"
                aria-selected="false"
              >
                Implement
              </a>
            </div>
          </nav>
          <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-design-f-pattern-lab"
              role="tabpanel"
              aria-labelledby="nav-design-f-pattern-tab"
            >
              <Ex1_design />
            </div>
            <div
              className="tab-pane fade"
              id="nav-f-pattern-lab"
              role="tabpanel"
              aria-labelledby="nav-f-pattern-tab"
            >
              <Ex1_implement />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
