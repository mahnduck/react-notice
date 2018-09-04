//SetState, State, Props with event

import React, {Component} from 'react';

export default class App extends Component {
  constructor() {
    super() 
    this.state = {
      textValue: "initial value"
    }
    this.changeText = this.changeText.bind(this);
  }
  changeText(e){
    this.setState({textValue: e.target.value});
  }
  render() {
    return (
      <div>
        <p>{this.state.textValue}</p>
        <input type="text" value={this.state.textValue} onChange={this.changeText} />
      </div>
    );
  }
}
