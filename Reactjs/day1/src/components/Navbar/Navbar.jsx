import { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor() {
    super();
  }
  render() {
    return <>
      <header>
        <div id="text-nav">
          <h1 className="mb-1">Hello React</h1>
          <h3 className="mb-5">Web Developer & Designer</h3>
          <button className="btn btn-outline-light  rounded-0 mt-5 fs-4 fw-bold text-uppercase">contact me</button>
        </div>
      </header>
    </>
  }
} 