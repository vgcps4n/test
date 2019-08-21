import React, { Component } from "react";
import Logop from "../../images/logopic.png";
import Logow from "../../images/logoword.png";
import Banner from "./banner";

import "./customer.css";
class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    return (
      <div className="container-extended">
        <header className="navbar navbar-extend-sm navbar-light" id="nav">
          <button className="col-sm-auto btn btn-link" href="">
            <img src={Logop} alt="pic" className="img-fluid" id="logo" />
          </button>
          <button className="col btn btn-link">
            <img src={Logow} alt="word" className="img-fluid" id="logo" />
          </button>
          <div
            className={this.state.menu ? "change" : "nochange"}
            onClick={this.toggle}
            id="menu"
          >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </header>
        <Banner />
      </div>
    );
  }
}

export default Customer;
