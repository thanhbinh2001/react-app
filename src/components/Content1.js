import React, { Component } from "react";

export default class Content1 extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <p>
              <b> Yêu cầu: </b> Chọn 1 đối tượng bất kỳ trong thế giới thực, ví
              dụ lớp môn học, giảng viên,… Sau đó thiết kế chức năng Quản lý đối
              tượng đó trên html bao gồm các tính năng thêm, sửa, xóa, tìm kiếm
              cho đối tượng đó. Ví dụ, làm chức năng Quản lý Sinh viên, bao gôm
              tính năng thêm, sửa, xóa, tìm kiếm. Chú ý: Các thành viên trong
              nhóm không được chọn các đối tượng giống nhau.
            </p>
          </li>
          <li>
            <p>
              <b>Hướng dẫn: </b>Tạo 1 menu <b>Lab 1</b> trên website cá nhân (sử
              dụng thẻ "a" trong html) bao gồm các tab sau:
            </p>
          </li>
          <li>
            <p></p>
            <ul>
              <li>
                <p>
                  Tab <strong>Requirement</strong>: copy lại nội dung của phần 1
                  ở trên <strong>(Yêu cầu)</strong> vào đây (và trình bày lại
                  cho đẹp)
                </p>
              </li>
              <li>
                <p>
                  Tab <strong>Design</strong>: để link tới các file sau đây:
                </p>
                <ul>
                  <li>
                    <p>Thiết kế trên giấy (chụp lại ảnh)</p>
                  </li>
                  <li>
                    <p>Chụp lại màn hình đã thiết kế trên html</p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  {" "}
                  Tab <strong>Implement</strong>: là trang html của chức năng
                  Quản lý đó
                </p>
              </li>
            </ul>
            <p />
          </li>
          <li>
            <p>
              {" "}
              Sau khi làm xong, upload toàn bộ lên website cá nhân trên
              firebase.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
