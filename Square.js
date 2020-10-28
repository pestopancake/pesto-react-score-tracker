import React from 'react';

export default class Square extends React.Component {
  constructor(data){
    super(data)
    this.state = data.data;
  }
  render() {
    let fontSize = ((this.state.ratio * 1) + 15);
    if(fontSize < 5) fontSize = 5;
    return (
      <button 
        className={"square" + (this.state.isActive ? " active" : "")} 
        onClick={() => this.props.onClick()}
        style={{fontSize: fontSize + 'vh'}}
        >

          &nbsp;{this.state.label}&nbsp;

      </button>
    );
  }
}