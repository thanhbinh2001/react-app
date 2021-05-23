import React, { Component } from "react";

export default class Lab3_requirement extends Component {
  render() {
    return (
      <div>
        <ul>
          <p>
            <strong>Yêu cầu: </strong>
          </p>
          <li>
            <p>
              Trong menu <strong>Labs</strong>, tạo 1 menu{" "}
              <strong>Lab3 (file lab3.html)</strong> sau đó tạo 2 tab{" "}
              <strong>Ex1, Ex2</strong>
            </p>
          </li>
          <li>
            <p>
              <strong>Ex1</strong>: Thiết kế một trang Web đơn giản sử dụng mẫu{" "}
              <strong>F-pattern</strong>
              <br />
              ==&gt; chuyển sang <strong>html (ex1.html)</strong>
            </p>
          </li>
          <li>
            <p>
              <strong>Ex2</strong>: Thiết kế một trang Web đơn giản sử dụng mẫu{" "}
              <strong>Z-pattern</strong>
              <br />
              ==&gt; chuyển sang <strong>html (ex2.html)</strong>
            </p>
          </li>
          <li>
            <p>
              Với cả <strong>Ex1, Ex2</strong>: Tạo 2{" "}
              <strong>tab Design và Implementation</strong>:
            </p>
            <ul>
              <li>
                <strong>Design</strong>: chụp lại hình ảnh để có cái nhìn tổng
                quan về file thiết kế,
                <br />
                có <strong>nút Download</strong> để download file thiết kế về
                nếu muốn
              </li>
              <li>
                <strong>Implementation</strong>: nội dung phần hiện thực trên
                html
              </li>
            </ul>
          </li>
          <li>
            Upload lên <strong>Firebase / Github</strong>
          </li>
        </ul>
      </div>
    );
  }
}
