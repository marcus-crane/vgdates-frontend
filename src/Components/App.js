import React, { Component } from 'react';
import Bulma from 'bulma'

class App extends Component {
  render() {
    return (
      <section className="hero is-primary is-medium">
        <div className="hero-head">
          <div className="container">
            <div className="nav-left">
              <a className="nav-item">
                <p>VGDates</p>
              </a>
            </div>
            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="nav-right nav-menu">
              <a className="nav-item is-active">
                Home
              </a>
            </div>
          </div>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Title
            </h1>
            <h2 className="subtitle">
              Subtitle
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
