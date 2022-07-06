import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    return (
      <div>
        <span className="block font-bold">{this.props.label}</span>
        <span className="block">{this.props.value}</span>
      </div>
    );
  }
}
