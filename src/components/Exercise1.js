import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }
    change=(event)=>{
        const name = event.target.name
        const value = event.target.value
        this.setState({[name]: value})
    }
    clicked=()=>{
        alert(`Come in ${this.state.name}, you're ${this.state.age} - that's good enough`)
    }
    render() {
        return (
            <div>
                <input id="name-input" name="name" onChange={this.change} value={this.state.name}/>
                <input id="age-input" name="age" onChange={this.change} value={this.state.age}/>
                <button onClick={this.clicked}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;