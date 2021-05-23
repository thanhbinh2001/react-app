import React, { Component } from "react";
import Ex1_design from "./Ex1_design";
import Ex1_implement from "./Ex1_implement";

export default class Lab3_fpattern extends Component {
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
            <div>
              <div className="row p-3">
                <div className="col ml-5 pt-3 pb-3 pr-3 pl-3">
                  <h3 className="text-center">1. Design on papper</h3>
                  <img
                    src="images/f-papper.jpg"
                    height="400px"
                    width="480px"
                    alt=""
                  />
                  <div className="text-center mt-2">
                    <button className="btn btn-info ">
                      <a
                        href="images/f-papper.jpg"
                        download="19130017-l2-papper"
                      >
                        Download
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col ml-5 pt-3 pb-3 pr-3 pl-3 mb-2 ">
                  <h3 className="text-center">2. Design on HTML </h3>
                  <img
                    src="images/f-html.png"
                    alt=""
                    height="400px"
                    width="480px"
                  />
                  <div className="text-center mt-2">
                    <button className="btn btn-info">
                      <a href="images/f-html.png" download="19130017-l2-html">
                        {" "}
                        Download{" "}
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-implement-lab"
            role="tabpanel"
            aria-labelledby="nav-implement-tab"
          >
            <div>
              <div className="d-flex ml-3 pb-3 pt-3">
                <img
                  src="images/l3-1.png"
                  alt=""
                  className="mr-3 pt-3 pb-3 pr-3"
                />
                <div className="details ml-5 pt-3 pb-3 pr-3 pl-3">
                  <h4>Tất tần tật về thuộc tính position trong CSS</h4>
                  <p>
                    Hiểu về thuộc tính position trong css - Khi bạn thiết kế các
                    layout cho website việc chuyển từ file thiết kế theo định...
                  </p>
                </div>
              </div>
              <div className="d-flex ml-3 pb-3 pt-3">
                <img
                  src="images/l3-2.png"
                  alt=""
                  className="mr-3 pt-3 pb-3 pr-3"
                />
                <div className="details ml-5 pt-3 pb-3 pr-3 pl-3">
                  <h4>
                    10 kỹ năng quan trọng để tìm công việc lập trình viên
                    frontend dễ...
                  </h4>
                  <p>
                    Dù đang là sinh viên hay đã làm việc trong ngành công nghệ
                    thông tin về mảng lập trình web thì những gì mình...
                  </p>
                </div>
              </div>
              <div className="d-flex ml-3 pb-3 pt-3">
                <img
                  src="images/l3-3.png"
                  alt=""
                  className="mr-3 pt-3 pb-3 pr-3"
                />
                <div className="details ml-5 pt-3 pb-3 pr-3 pl-3">
                  <h4>Thời đại của Pixel Perfect Design đã hết từ lâu</h4>
                  <p>
                    Khi bắt dầu dàn trang design cho web, hãy sử dụng những hệ
                    thống grid phổ biến hiện nay như Bootstrap Grid. Nếu bạn...
                  </p>
                </div>
              </div>
              <div className="d-flex ml-3 pb-3 pt-3">
                <img
                  src="images/l3-4.png"
                  alt=""
                  className="mr-3 pt-3 pb-3 pr-3"
                />
                <div className="details ml-5 pt-3 pb-3 pr-3 pl-3">
                  <h4>Principle thiết kế của các sản phẩm nổi tiếng</h4>
                  <p>
                    Tác giả: Lưu Bình An Phù hợp cho các bạn thiết kế nào ko
                    muốn làm code dạo, design dạo nữa, bạn muốn cái gì...
                  </p>
                </div>
              </div>
              <div className="d-flex ml-3 pb-3 pt-3">
                <img
                  src="images/l3-5.jpg"
                  alt=""
                  className="mr-3 pt-3 pb-3 pr-3"
                />
                <div className="details ml-5 pt-3 pb-3 pr-3 pl-3">
                  <h4>
                    24 code ES6 tân tiến để khắc phục các lỗi thực hành
                    JavaScript
                  </h4>
                  <p>
                    Tôi đích thân tự chọn vài trích đoạn những code hữu ích nhất
                    từ trang ‘30secondsofcode’, vốn đã là 1 nguồn tài nguyên
                    tuyệt...
                  </p>
                </div>
              </div>
              <div className="d-flex ml-3 pb-3 pt-3">
                <img
                  src="images/l3-6.jpg"
                  alt=""
                  className="mr-3 pt-3 pb-3 pr-3"
                />
                <div className="details ml-5 pt-3 pb-3 pr-3 pl-3">
                  <h4>
                    Nguồn tự học web front-end và web configuration ngon bổ rẻ
                  </h4>
                  <p>
                    Lập trình web là công việc đòi hỏi nhiều kĩ năng và kiến
                    thức chuyên môn khó. Có rất nhiều phương pháp để tự...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
