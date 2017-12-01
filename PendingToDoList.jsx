import React from 'react';
import ToDo from './ToDo.jsx'


class PendingToDoList extends React.Component{
    constructor(props){
        super(props);
        this.handlecheck = this.handlecheck.bind(this);
        this.handlecheck = this.handlecheck.bind(this);
    }

    handlecheck(id){
       this.props.onchange(id,true);
    }

    handleclose(id){
        this.props.onclose(id);
     }

    render(){
        let  todos = this.props.value;     
        var todoli = todos.map((todo) => {
                        return <ToDo key={todo.id} id={todo.id} text={todo.text} completed={todo.complete} checkboxchange={this.handlecheck} ondelete={this.handleclose}/>
        });

        return (         

         <div>
             <h4>Pending Tasks</h4>
             <ul>{ todoli }
             <li> + <input type="text" placeholder="Add a Item"/> &times; </li>
             </ul>
        </div>
        );        
    }
}

export default PendingToDoList;