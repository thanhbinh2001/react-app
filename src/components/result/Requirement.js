import React, { Component } from "react";

export default class Requirement extends Component {
  render() {
    return (
      <div>
        <ul>
          <p>
            <strong>Yêu cầu: </strong>
          </p>
          <li>
            Tạo một <strong>trang Result</strong> trên đó liệt kê những gì mình
            đã làm/học được trong suốt quá trình làm bài tập nhóm.
            <br /> Dẫn link tới từng trang do SV đã làm.
          </li>
          <li>
            Tự đánh giá mình được{" "}
            <strong>bao nhiêu % trong tổng số 100%</strong>
            của bài tập nhóm
          </li>
        </ul>
      </div>
    );
  }
}
