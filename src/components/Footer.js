import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="ftco-footer ftco-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  Copyright © By Colorlib | This template is made again{" "}
                  <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                  <a
                    href="https://www.facebook.com/dothanhbinhdev/"
                    target="_blank"
                  >
                    {" "}
                    Do Thanh Binh
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
