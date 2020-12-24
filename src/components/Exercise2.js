import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}
change=(event)=>{
    if(event.target.name === "name"){
        this.setState({name: event.target.value})
    }else{
        this.setState({fruit: event.target.value}, ()=>{
            console.log(`${this.state.name} selected ${this.state.fruit}`);
        })
        
    }
}
render() {
    return (
        <div>
            <input id="name-input" value={this.state.name} onChange={this.change} name="name" />
            <select id="select-input" onChange={this.change} name="fruit">
                <option value="apple">apple</option>
                <option value="banana">banana</option>
                <option value="orange">orange</option>
            </select>
        </div>
    );
}
}

export default Exercise2;