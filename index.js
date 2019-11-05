import React, { Component } from 'react';
import { render } from 'react-dom';
import Square from './Square';
import Board from './Board';
import './style.css';
import NoSleep from 'nosleep.js';

var noSleep = new NoSleep();

function enableNoSleep() {
  noSleep.enable();
  document.removeEventListener('touchstart', enableNoSleep, false);
}
document.addEventListener('touchstart', enableNoSleep, false);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React score keeper',
    };
  }

  render() {
    return (
      <div>
        <div className="board-wrapper">
          <Board />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
