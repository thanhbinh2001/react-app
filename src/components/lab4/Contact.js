import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section
          className="ftco-section contact-section ftco-no-pb mt-3"
          id="contact-section"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="row  mb-5 pb-3 mt-5 ">
                <div className="col-lg-0 heading-section text-center">
                  <span className="subheading">Contact me</span>
                  <h2 className="mb-4">Have a Support?</h2>
                  <p>If you want to help, please feel free to contact me</p>
                </div>
              </div>
              <div className="row block-9">
                <div className="col-md-8">
                  <form action="#" className="bg-light p-4 p-md-5 contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name
                            id
                            cols={30}
                            rows={7}
                            className="form-control"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            defaultValue="Send Message"
                            className="btn btn-primary py-3 px-5"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-4 d-flex pl-md-5 mt-5">
                  <div className="row">
                    <div className="dbox w-100 d-flex">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker" />
                      </div>
                      <div className="text">
                        <p>
                          <span>Address:</span> Biên Hòa, Đồng Nai
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone" />
                      </div>
                      <div className="text">
                        <p>
                          <span>Phone:</span>{" "}
                          <a href="tel://1234567920">0387655xxx</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane" />
                      </div>
                      <div className="text">
                        <p>
                          <span>Email:</span>{" "}
                          <a href="mailto:dothanhbinhdev@gmail.com">
                            dothanhbinhdev@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe" />
                      </div>
                      <div className="text">
                        <p>
                          <span>Website</span> <a href="#">Here</a>
                        </p>
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
