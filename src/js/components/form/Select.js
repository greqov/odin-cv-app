import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    return (
      <div>
        <label htmlFor="priority" className="block font-medium text-slate-700">
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          className="mt-1 block w-full py-2 px-3 border border-slate-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
        >
          <option value="low">Low</option>
          <option value="middle">Middle</option>
          <option value="high">High</option>
        </select>
      </div>
    );
  }
}
