import React, { Component } from "react";

export default class Content extends Component {
  render() {
    return (
      <div>
        {/* content */}
        <div>
          <div className="row justify-content-between">
            {/* img */}
            <div className="col-lg-6">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={1}
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={2}
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={3}
                  />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="images/l4-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="images/l4-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="images/l4-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="images/l4-4.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            {/* details */}
            <div className="col-lg-6">
              <div className="row">
                <span>
                  Ốp lưng iphone Water Color cạnh vuông BVC 6/6plus/6s/6splus
                  <br />
                  7/7plus/8/8plus/x/xr/xs/11/12/pro/max/plus/promax
                </span>
              </div>
              {/* danh gia */}
              <div className="d-flex">
                <div className="d-flex">
                  <div className="text-rating mr-4">4.9</div>
                  <div className="rate">
                    <div className="row">
                      <div className="col-lg-0">
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="col-lg-0">
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="col-lg-0">
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="col-lg-0">
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="col-lg-0">
                        <i className="fa fa-star-o" />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="ml-4 mr-3">|</span>
                <div className="d-flex">
                  <div className="ml-3">
                    6,8k <span>Đánh giá</span>
                  </div>
                </div>
                <span className="ml-3 mr-3">|</span>
                <div className="d-flex">
                  <div className="ml-3">
                    18,6k <span>Đã bán</span>
                  </div>
                </div>
              </div>
              {/* gia */}
              <div className="d-flex align-items-center">
                <div className="price-fact mr-3">₫32.000 - ₫44.000</div>
                <div className="d-flex align-items-center">
                  <div className="sale mr-3">₫1.000 - ₫22.000</div>
                  <div className="percent">98% giảm</div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <label className="group-color">Nhóm màu</label>
                <div className="d-flex align-items-center ml-3 mt-2">
                  <button className="product-variation">Hồng Cánh Xen</button>
                  <button className="product-variation">
                    Xanh Tím Ốp XámXanh
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <label className="group-color">Dòng máy</label>
                <div className="d-flex align-items-center ml-3 mt-2">
                  <button className="product-variation">IP6/6S</button>
                  <button className="product-variation">IP7/8</button>
                  <button className="product-variation">IP 12ProMax</button>
                  <button className="product-variation">IP 11</button>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <label className="group-color">Số lượng</label>
                <div className="d-flex align-items-center ml-4">
                  <div className="row">
                    <input
                      className="minus is-form"
                      type="button"
                      defaultValue="-"
                    />
                    <input
                      aria-label="quantity"
                      className="input-qty"
                      max={10}
                      min={1}
                      name
                      type="number"
                      defaultValue={1}
                    />
                    <input
                      className="plus is-form"
                      type="button"
                      defaultValue="+"
                      data-toggle="tooltip"
                      title="React chưa rõ cách làm"
                    />
                  </div>
                </div>
              </div>
              {/* dat hang */}
              <div className="order mt-5">
                <div className="d-flex">
                  <button type="button" className="shopping">
                    <i className="fa fa-shopping-cart" />
                    <span>Thêm vào giỏ hàng</span>
                  </button>
                  <button
                    type="button"
                    className="shopping buy-now"
                    aria-disabled="false"
                  >
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
