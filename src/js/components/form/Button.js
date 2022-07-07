import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { label, type, handleClick, appearance } = this.props;

    const classList =
      appearance === 'secondary'
        ? 'text-slate-700 bg-transparent border-slate-200 hover:bg-slate-200 active:border-slate-400 active:bg-slate-400 border border-transparent'
        : 'text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800';

    return (
      <button
        className={`inline-flex px-4 py-2 min-w-[110px] justify-center ${classList} rounded-md transition select-none`}
        type={type || 'button'}
        onClick={handleClick}
      >
        {label}
      </button>
    );
  }
}
