import React, { Component } from 'react'

export default class TextComponent extends Component {
    constructor(props){
        super(props);
        this.state = {inputValue : 0}
    }
    handleIncrement = () =>{
        this.setState(prevState =>{
            return {
                inputValue : prevState.inputValue + 1
            }
        })
    }
   
  render() {
    return (
      <div>
<p>Count : 
      <span>{this.state.inputValue}</span></p>
      <button className="c" onClick={this.handleIncrement}>Increment</button>
      
      </div>
    )
  }
}