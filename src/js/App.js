import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="relative min-h-screen flex flex-col font-sans bg-zinc-50 selection:bg-pink-300">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
