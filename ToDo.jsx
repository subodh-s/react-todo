import React from 'react'

class ToDo extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id){
    this.props.checkboxchange(id);
    }

    handleClick(id){
        this.props.ondelete(id);
    }

    render(){

        if(this.props.strikethrough){
            return <li key={this.props.key}><input type="checkbox" onChange= {this.handleChange.bind(this, this.props.id)} /><strike> {this.props.text} </strike><span onClick = {this.handleClick.bind(this,this.props.id)}> &times; </span></li>;            
        }
        else
        {
            return <li key={this.props.key}><input type="checkbox" onChange= {this.handleChange.bind(this, this.props.id)} />{this.props.text} <span onClick = {this.handleClick.bind(this,this.props.id)}> &times; </span></li>;
        }
    }
}

export default ToDo;