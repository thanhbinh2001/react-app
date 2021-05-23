import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb" className="mt-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About
            </li>
          </ol>
        </nav>

        <section
          className="ftco-about ftco-section ftco-no-pt ftco-no-pb"
          id="about-section"
        >
          <div className="row d-flex no-gutters mr-5 ml-5">
            <div className="col-md-6 col-lg-5 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay" />
                <div
                  className="img d-flex align-self-stretch align-items-center"
                  style={{ backgroundImage: "url(images/about.jpg)" }}
                ></div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 pl-md-4 pl-lg-5">
              <div className="py-md-4">
                <div className="row justify-content-start pb-3">
                  <div className="col-md-12 heading-section ">
                    <span className="subheading">My Intro</span>
                    <h2
                      className="mb-4"
                      style={{
                        fontSize: "34px",
                        textTransform: "capitalize",
                      }}
                    >
                      About Me
                    </h2>

                    <ul className="about-info mt-4 px-md-0 px-2">
                      <li className="d-flex">
                        <span>Name:</span> <span>Do Thanh Binh</span>
                      </li>
                      <li className="d-flex">
                        <span>Date of birth:</span>{" "}
                        <span>November 15, 2001</span>
                      </li>
                      <li className="d-flex">
                        <span>ID:</span> <span>19130017</span>
                      </li>
                      <li className="d-flex">
                        <span>Falcuty:</span>{" "}
                        <span>Information Technology</span>
                      </li>
                      <li className="d-flex">
                        <span>School:</span> <span>Nong Lam University</span>
                      </li>
                      <li className="d-flex">
                        <span>Relationship:</span> <span>Single</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12">
                    <div className="my-interest d-lg-flex w-100">
                      <div className="interest-wrap d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="flaticon-listening" />
                        </div>
                        <div className="text">Music</div>
                      </div>
                      <div className="interest-wrap d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="flaticon-suitcases" />
                        </div>
                        <div className="text">Travel</div>
                      </div>
                      <div className="interest-wrap d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="flaticon-video-player" />
                        </div>
                        <div className="text">Movie</div>
                      </div>
                      <div className="interest-wrap d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="flaticon-web-programming" />
                        </div>
                        <div className="text">Study</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
