import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { label, type, handleClick } = this.props;

    return (
      <button
        className="inline-flex px-4 py-2 min-w-[110px] justify-center text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md transition select-none"
        type={type || 'button'}
        onClick={handleClick}
      >
        {label}
      </button>
    );
  }
}
