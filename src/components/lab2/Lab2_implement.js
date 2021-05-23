import React, { Component } from "react";

export default class Lab2_implement extends Component {
  render() {
    return (
      <div>
        {/* code reference */}
        <div className="container">
          <div className="window">
            <div className="order-info">
              <div className="order-info-content">
                <h3 className="mt-2">Giỏ hàng</h3>
                {/* sp1 */}
                <div className="line" />
                <table className="order-table">
                  <tbody>
                    <tr>
                      <td>
                        <img src="images/sp2.jpg" className="full-width" />
                      </td>
                      <td>
                        <span className="thin">Nike Air Force 1 Easter</span>
                        <br />
                        <span className="thin small">
                          {" "}
                          Color: Bạc/Trắng, Size: 37
                        </span>
                        <br />
                        <span>Số lượng: 1 </span>
                        <br />
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="price">
                          $73.91
                          <span>$121.74</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* sp1 */}
                {/* sp2 */}
                <div className="line" />
                <table className="order-table">
                  <tbody>
                    <tr>
                      <td>
                        <img src="images/sp1.png" className="full-width" />
                      </td>
                      <td>
                        <span className="thin">TIMBERLAND Giày Cổ Cao </span>
                        <br />
                        <span className="thin small">
                          {" "}
                          Color: Black, Size: 37
                        </span>
                        <br />
                        <span>Số lượng: 1 </span>
                        <br />
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="price">
                          $134.74
                          <span>$260.44</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* sp2 */}
                <div className="line" />
                <table className="order-table"></table>
                <div className="total">
                  <span style={{ float: "left" }}>
                    <div className="thin dense">VAT 19%</div>
                    <div className="thin dense">Delivery</div>
                    TOTAL
                  </span>
                  <span style={{ float: "right", textAlign: "right" }}>
                    <div className="thin dense">$39.64</div>
                    <div className="thin dense">$4.95</div>
                    $248.29
                  </span>
                </div>
              </div>
            </div>
            <div className="credit-info">
              <div className="credit-info-content">
                <table className="half-input-table">
                  <tbody>
                    <tr>
                      <td>Please select your card: </td>
                      <td>
                        <div className="dropdown" id="card-dropdown">
                          <div className="dropdown-btn" id="current-card">
                            Visa
                          </div>
                          <div className="dropdown-select">
                            <ul>
                              <li>Master Card</li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img
                  src="images/visa_logo.png"
                  height={80}
                  className="credit-card-image"
                  id="credit-card-image"
                />
                {/* form */}
                <form>
                  <div className="form-row">
                    <div className="col form-group">
                      <label className>Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="num"
                        placeholder="0000 0000 0000 1234"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col form-group">
                      <label className>Card Holder</label>
                      <input
                        type="text"
                        className="form-control"
                        id="holder"
                        placeholder="Nguyen Van A"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col form-group">
                      <label className>Expires</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exp"
                        placeholder="mm/yy"
                        required
                      />
                    </div>
                    <div className="col form-group">
                      <label className>CVV</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cvv"
                        placeholder="CVV"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group ">
                      <button
                        className="pay-btn"
                        onclick="check()"
                        id="checkOut"
                      >
                        Checkout
                      </button>
                    </div>
                    {/* end form */}
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* end code reference */}
        </div>
      </div>
    );
  }
}
