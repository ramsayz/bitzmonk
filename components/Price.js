import React, { Component } from "react";

export default class Price extends Component {
  constructor() {
    super();
    this.state = {
      currency: "",
    };
  }
  render() {
    // let list = "";
    // if (this.state.currency === "USD") {
    //   list = (
    //     <li class="list-group-item d-flex justify-content-between align-items-center">
    //       Bitcoin rate for {this.props.bpi.USD.description} is
    //       <span class="badge badge-secondary ">{this.props.bpi.USD.code}</span>
    //       <strong>{this.props.bpi.USD.rate}</strong>
    //     </li>
    //   );
    // } else if (this.state.currency === "GBP") {
    //   list = (
    //     <li class="list-group-item d-flex justify-content-between align-items-center">
    //       Bitcoin rate for {this.props.bpi.GBP.description} is
    //       <span class="badge badge-primary ">{this.props.bpi.GBP.code}</span>
    //       <strong>{this.props.bpi.GBP.rate}</strong>
    //     </li>
    //   );
    // } else {
    //   list = (
    //     <li class="list-group-item d-flex justify-content-between align-items-center">
    //       Bitcoin rate for {this.props.bpi.EUR.description} is
    //       <span class="badge badge-primary ">{this.props.bpi.EUR.code}</span>
    //       <strong>{this.props.bpi.EUR.rate}</strong>
    //     </li>
    //   );
    // }
    return (
      <div>
        {/* <ul class="list-group">{list}</ul> */}
        <ul class="list-group">
          {!this.state.currency ? (
            <strong>Select a currency</strong>
          ) : (
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Bitcoin rate for {this.props.bpi[this.state.currency].description}{" "}
              is
              <span class="badge badge-primary ">
                {this.props.bpi[this.state.currency].code}
              </span>
              <strong>{this.props.bpi[this.state.currency].rate}</strong>
            </li>
          )}
        </ul>
        <br></br>
        <select
          className="form-control"
          onChange={(e) => {
            this.setState({ currency: e.target.value });
          }}
        >
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}
