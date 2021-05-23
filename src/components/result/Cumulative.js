import React, { Component } from "react";

export default class Cumulative extends Component {
  render() {
    return (
      <div>
        <div className="col-12">
          <h3 className="card-title">
            {" "}
            Những điều tích lũy được khi học môn Giao tiếp người máy
          </h3>
          <h5 className="card-subtitle">Personal</h5>
          <p>- Có cái nhìn tổng quát hơn về thiết kế giao diện;</p>
          <p>
            - Áp dụng lí thuyết được học trên lớp vào thiết kế giao diện. Thiết
            kế được giao diện đúng yêu cầu, dễ nhìn, dễ sử dụng, màu sắc hài
            hòa,...
          </p>
          <p>
            - Áp dụng kiến thức về HTML, CSS, Bootstrap, Javascript, ReactJS
            components cơ bản.
          </p>
          <hr />
          <h5 className="card-subtitle">Teamwork</h5>
          <p>- Biết cách làm việc thông qua github;</p>
          <p>
            - Luôn giữ vững tinh thần trách nhiệm, không lơ là, lười biếng làm
            chậm trễ tiến độ của nhóm.
          </p>
          <hr />
          <h5 className="card-subtitle">Nhận xét về nhóm</h5>
          <p>- Một vài người chưa có tinh thần trách nhiệm;</p>
          <p>- Nhóm trưởng chưa biết cách phân công công việc nên dẫn tới tình trạng chậm tiến độ;</p>
          <p>- Nhìn chung mọi người đều có tinh thần học tập.</p>
        </div>
      </div>
    );
  }
}
