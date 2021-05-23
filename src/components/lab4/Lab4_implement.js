import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";
import Contact from "./Contact";
import Content from "./Content";
import Nav from "./Nav";

export default class Lab4_implement extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Breadcrumb />
        <Content />
        <Contact />
      </div>
    );
  }
}
