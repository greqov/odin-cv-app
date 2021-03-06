import React, { Component } from 'react';

export default class Textarea extends Component {
  render() {
    const { label, type, name, placeholder, value, handleChange } = this.props;

    return (
      <label className="block">
        <span className="block font-medium text-slate-700">{label}</span>
        <textarea
          className="mt-1 block w-full px-3 py-2 min-h-[66px] bg-white border border-slate-300 rounded-md shadow-sm text-base placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          type={type || 'text'}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder || label}
          autoComplete="off"
        />
      </label>
    );
  }
}
