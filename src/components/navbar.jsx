import React, { Component } from "react";
// stateless function component
const NavBar = props => {
    console.log('NavBar - rendered');
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-scendory">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
/*  class type
class NavBar extends Component {
  // state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-scendory">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
} 

export default NavBar; */
