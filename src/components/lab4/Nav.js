import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div>
        {/* nav */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="images/logo.png" alt="" />
          </a>
          <div
            className="collapse navbar-collapse mr-3 ml-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Điện thoại <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Laptop
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Phụ kiện
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Pin sạc dự phòng
                  </a>
                  <a className="dropdown-item" href="#">
                    Ốp lưng điện thoại
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Loa
                  </a>
                  <a className="dropdown-item" href="#">
                    Tai nghe
                  </a>
                  <a className="dropdown-item" href="#">
                    Usb- Ổ Cứng
                  </a>
                  <a className="dropdown-item" href="#">
                    Chuột máy tính
                  </a>
                  <a className="dropdown-item" href="#">
                    Balo/ Túi chống sốc
                  </a>
                </div>
              </li>
            </ul>
            <div>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2 search-l4"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
          </div>
        </nav>
        {/* end nav */}
      </div>
    );
  }
}
