import React, { Component } from 'react';
import Carousel from './components/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
      </div>
    );
  }
}

export default App;
