import React from 'react';
import ToDo from './ToDo.jsx'


class PendingToDoList extends React.Component{
    constructor(props){
        super(props);
        
    }

    handlecheck(id){
        
    }

    render(){
        let  todos = this.props.value;     
        var todoli = todos.map((todo) => {
                        return <ToDo key={todos.id} text={todo.text} completed={todo.complete} checkboxchange={this.handlecheck} />
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