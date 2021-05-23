import React, { Component } from "react";

export default class Lab2_requirement extends Component {
  render() {
    return (
      <div>
        <ul>
          <p>
            <strong>Yêu cầu: </strong>
          </p>
          <li>
            <p>
              {" "}
              <strong>(1)</strong> Tạo ra một <strong>user scenario</strong>
            </p>
          </li>
          <li>
            <p>
              {" "}
              <strong>(2)</strong> Chọn 1 bước trong{" "}
              <strong>user scenario</strong> để thiết kế 1 form giao diện Web
              trên công cụ thiết kế đã chọn. <br />
              Sau đó tạo ra <strong>file html</strong> tương ứng cho thiết kế
              này.
            </p>
          </li>
          <li>
            <p>
              Upload lên <strong>Firebase / github</strong>: trong file html có
              chèn hình ảnh của user scenario ở <strong>(1)</strong> và đường
              dẫn của file thiết kế ở <strong>(2)</strong>.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
