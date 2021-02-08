import React, { Component } from "react";
import Registration from "./auth/Registration";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Dad's Chore Application-inator</h1>
        <h1>HAVE YOU DONE YOUR CHORES??!</h1>
        <Registration />
      </div>
    );
  }

}