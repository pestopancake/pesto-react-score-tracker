import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      squares: [
        {
          label: 0,
          isActive: 1,
          ratio: 1,
        },
        {
          label: 0,
          isActive: 0,
          ratio: 1,
        }
      ]
    };
  }

  reset() {
    const squares = this.state.squares.slice();
    for(var i = 0; i < squares.length; ++i){
      squares[i].label = 0;
      squares[i].ratio = 0;
    }
    this.setState({squares: squares});
  }

  toggleActivePlayer() {
    const squares = this.state.squares.slice();
    squares[0].isActive = !squares[0].isActive;
    squares[1].isActive = !squares[1].isActive;
    this.setState({squares: squares});
  }

  clickSquare(i) {
    const squares = this.state.squares.slice();
    squares[i].label += 1
    squares[0].ratio = squares[0].label - squares[1].label
    squares[1].ratio = squares[1].label - squares[0].label
    this.setState({squares: squares});
    if((squares[0].label + squares[1].label) % 2 === 0){
      this.toggleActivePlayer();
    }
  }

  render() {
    return (
      <div>
        <div className="board">
          <Square data={this.state.squares[0]} key={0} onClick={() => this.clickSquare(0)} />
          <div id="actions">
            <div id="btn-new-game" onClick={() => this.reset()}>
              new game
            </div>
            <div id="btn-toggle-active" onClick={() => this.toggleActivePlayer()}>
              Toggle Active
            </div>
          </div>
          <Square data={this.state.squares[1]} key={1} onClick={() => this.clickSquare(1)} />
        </div>
      </div>
    );
  }
}
