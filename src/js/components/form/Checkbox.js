import React, { Component } from 'react';

export default class Checkbox extends Component {
  render() {
    const { id, label, name, checked, handleChange } = this.props;

    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id={id}
            name={name}
            type="checkbox"
            className="focus:ring-sky-500 h-4 w-4 text-sky-500 border-slate-300 rounded"
            checked={checked}
            onChange={handleChange}
          />
        </div>
        <div className="ml-3">
          <label htmlFor={id} className="font-medium text-slate-700">
            {label}
          </label>
        </div>
      </div>
    );
  }
}
