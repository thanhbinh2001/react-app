import React, { Component } from "react";

export default class Breadcrumb extends Component {
  render() {
    return (
      <div>
        {/* breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Phụ kiện</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Ốp lưng điện thoại
            </li>
          </ol>
        </nav>
        {/* end breadcrumb */}
      </div>
    );
  }
}
