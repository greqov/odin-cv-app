import React, { Component } from 'react';
import Input from './form/Input';
import Info from './UI/Info';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: 'John Doe',
      email: 'doe@john.de',
      phone: '123456',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const infoElements = Object.entries(this.state).map(([label, value]) => (
      <Info key={label} label={label} value={value} />
    ));

    return (
      <main className="js-main container max-w-4xl mx-auto mb-6 px-4">
        <div className="grid gap-4 grid-cols-2">
          <div>
            <h2 className="block text-2xl font-bold">General info</h2>

            <Input
              title="Full name"
              name="fullname"
              type="text"
              value={this.state.fullname}
              handleChange={this.handleChange}
            />
            <Input
              title="Email"
              name="email"
              type="email"
              value={this.state.email}
              handleChange={this.handleChange}
            />
            <Input
              title="Phone number"
              name="phone"
              type="text"
              value={this.state.phone}
              handleChange={this.handleChange}
            />

            <h2 className="block text-2xl font-bold">Education</h2>
            <h2 className="block text-2xl font-bold">Practice</h2>

            <button
              className="inline-flex px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md transition select-none"
              type="button"
            >
              Such button
            </button>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="todoComplete"
                  name="complete"
                  type="checkbox"
                  className="focus:ring-sky-500 h-4 w-4 text-sky-500 border-slate-300 rounded"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="todoComplete" className="font-medium text-slate-700">
                  Complete?
                </label>
              </div>
            </div>

            <div className="">
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
          </div>

          <div>
            <h2 className="block text-2xl font-bold">CV</h2>
            {infoElements}
          </div>
        </div>
      </main>
    );
  }
}
