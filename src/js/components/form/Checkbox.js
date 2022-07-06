import React, { Component } from 'react';

export default class Checkbox extends Component {
  render() {
    const { label, name, checked, handleChange } = this.props;

    return (
      <div className="py-3">
        <label className="inline-flex items-center font-medium text-slate-700">
          <input
            name={name}
            type="checkbox"
            className="mr-3 focus:ring-sky-500 h-4 w-4 text-sky-500 border-slate-300 rounded"
            checked={checked}
            onChange={handleChange}
          />

          {label}
        </label>
      </div>
    );
  }
}
