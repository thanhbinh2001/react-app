import React, { Component } from "react";
import Ex2_design from "./Ex2_design";
import Ex2_implement from "./Ex2_implement";

export default class Z_pattern extends Component {
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
                href="#nav-design-pattern-lab"
                role="tab"
                aria-controls="nav-design-pattern"
                aria-selected="false"
              >
                Design
              </a>
              <a
                className="nav-item nav-link actice"
                id="nav-pattern-tab"
                data-toggle="tab"
                href="#nav-pattern-lab"
                role="tab"
                aria-controls="nav-pattern"
                aria-selected="false"
              >
                Implement
              </a>
            </div>
          </nav>
          <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-design-pattern-lab"
              role="tabpanel"
              aria-labelledby="nav-design-pattern-tab"
            >
              <Ex2_design />
            </div>
            <div
              className="tab-pane fade"
              id="nav-pattern-lab"
              role="tabpanel"
              aria-labelledby="nav-pattern-tab"
            >
              <Ex2_implement />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
