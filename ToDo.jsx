import React from 'react'

class ToDo extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
      alert(9);
    }

    render(){
        
        return <li key={this.props.key}><input type="checkbox" onChange= {this.handleChange} /> {this.props.text} &times;</li>;
    }
}

export default ToDo;