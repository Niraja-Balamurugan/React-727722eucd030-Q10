import React, { Component } from 'react'

export default class ClassComponent extends Component {
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
    handleDecrement = () =>{
        this.setState(prevState =>{
            if(prevState.inputValue > 0)
            {
                return {
                    inputValue : prevState.inputValue - 1
                }
            }
            else
            {
                return {
                    inputValue : 0
                }
            }
        })
    }
  render() {
    return (
      <div>
      <h5>Name: SKCET</h5>
      <p><b>Age : </b>
      <span>{this.state.inputValue} </span><br></br></p>
      <button  className="b" onClick={this.handleDecrement}>Make Younger</button>
      <button className="b" onClick={this.handleIncrement}>Get Older</button>
      
      </div>
    )
  }
}