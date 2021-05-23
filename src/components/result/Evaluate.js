import React, { Component } from "react";

export default class Evaluate extends Component {
  render() {
    return (
      <div>
        <div className="contain">
          <div className="row justify-content-center">
            <div className="col-lg-8 ">
              <h2 className="head text-center">Đánh giá quá trình</h2>
              <div className="row ">
                <div className="col-md-6 col-sm-12 mb-4">
                  <div className="card-body">
                    <h3 className="card-title">
                      <i className="fa fa-users ml-1" />
                      Teamwork
                    </h3>
                    <div className="title">
                      <h5 className="card-subtitle">Website Project</h5>
                      <ol className="pl-2">
                        <li>Chuyển website sang reactJs</li>
                        <li>Đăng ký hosting, upload lên firebase/github</li>
                        <li>Chức năng login/register</li>
                      </ol>
                      <h5 className="card-subtitle">Website Group</h5>
                      <ol className="pl-2">
                        <li> Trang Tech</li>
                        <li> Trang Group Diary</li>
                        <li> Chuyển sang reactJS</li>
                      </ol>
                      <h5 className="card-subtitle">Evaluate</h5>
                      <ol className="pl-2">
                        <li>Hoàn thành: 100%</li>
                        <li>Đóng góp: 22%</li>
                      </ol>
                    </div>
                    <div className="button-result">
                      <a href = "https://hci2021group02.tk/result/">
                        <button type="button" className="btn btn-primary">
                          <i className="fa fa-star" />
                          Evaluate of the team
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 mb-4">
                  <div className="card-body">
                    <h3 className="card-title">
                      <i className="fa fa-user" />
                      Personal
                    </h3>
                    <div className="title">
                      <h5 className="card-subtitle">Individual Exercises</h5>
                      <ol className="pl-2">
                        <li>Hoàn thành các bài tập tuần</li>
                        <li>Cập nhật bài tập lên firebase</li>
                        <li>Hoàn thành đúng yêu cầu từng bài tập</li>
                        <li>Sửa chữa khi mắc các lỗi</li>
                      </ol>
                      <h5 className="card-subtitle">Website Personal</h5>
                      <ol className="pl-2">
                        <li>
                          Tiêu chí đặt ra: trang web phải đúng yêu cầu, dễ nhìn,
                          tạo thiện cảm
                        </li>
                        <li>Học được nhiều thứ từ việc chỉnh sửa template</li>
                      </ol>
                      <h5 className="card-subtitle">Evaluate</h5>
                      <ol className="pl-2">
                        <li>Hoàn thành: 100%</li>
                      </ol>
                    </div>
                    <div className="button-result">
                      <a href="/">
                        <button type="button" className="btn btn-primary">
                          <i className="fa fa-eye" />
                          Show Website Personal
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <h2 className="head">
                <i className="fa fa-users" /> Group 02
              </h2>
              <h5 className="card-subtitle">Member</h5>
              <hr />
              <section>
                <div className="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <img
                        src="images/member/member-1.jpg"
                        width="50%"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6">
                      <p className="nameSt">
                        {" "}
                        <a href="https://19130002.tk/"> Huỳnh Hữu Ân</a>{" "}
                      </p>
                      <p className="idSt">19130002</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <img
                        src="images/member/member-2.jpg"
                        width="50%"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6">
                      <p className="nameSt">
                        {" "}
                        <a href="https://19130003.tk/">Huỳnh Văn Hữu Ân</a>
                      </p>
                      <p className="idSt">19130003</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <img
                        src="images/member/member-3.jpg"
                        width="50%"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6">
                      <p className="nameSt">
                        {" "}
                        <a href="https://19130017.tk/">Đỗ Thanh Bình</a>{" "}
                      </p>
                      <p className="idSt">19130017</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <img
                        src="images/member/member-4.jpg"
                        width="50%"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6">
                      <p className="nameSt">
                        {" "}
                        <a href="https://19130021.tk/">
                          Nguyễn Minh Chánh
                        </a>{" "}
                      </p>
                      <p className="idSt">19130021</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <img
                        src="images/member/member-5.jpg"
                        width="50%"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6">
                      <p className="nameSt">
                        {" "}
                        <a href="https://19130022.tk/">Nguyễn Minh Châu</a>{" "}
                      </p>
                      <p className="idSt">19130022</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
