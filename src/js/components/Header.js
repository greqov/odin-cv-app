import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="mb-6 border-b">
        <div className="container max-w-5xl mx-auto py-6 px-4">
          <div className="flex items-center justify-between">
            <span className="block text-3xl font-bold">CV App</span>
          </div>
        </div>
      </header>
    );
  }
}
