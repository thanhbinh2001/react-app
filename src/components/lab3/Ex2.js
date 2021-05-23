import React, { Component } from "react";
import Ex2_implement from "./Ex2_implement";
import Ex2_desgin from "./Ex2_design";

export default class Ex2 extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
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
            id="nav-design-lab"
            role="tabpanel"
            aria-labelledby="nav-design-tab"
          >
            <Ex2_desgin />
          </div>
          <div
            className="tab-pane fade"
            id="nav-implement-lab"
            role="tabpanel"
            aria-labelledby="nav-implement-tab"
          >
            <Ex2_implement />
          </div>
        </div>
      </div>
    );
  }
}
