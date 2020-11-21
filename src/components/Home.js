import React, { Component } from "react";
import Registration from "./auth/Registration";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>This is the home component yo!</h1>
        <Registration />
      </div>
    );
  }

}