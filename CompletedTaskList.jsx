import React from 'react';
import ToDo from './ToDo.jsx'


class CompletedTaskList extends React.Component{

    constructor(props){
        super(props);
        this.handlecheck = this.handlecheck.bind(this);
    }

    handlecheck(id){
       this.props.onchange(id,false);
    }

    render(){
        let  todos = this.props.value;     
        var todoli = todos.map((todo) => {
                        return <ToDo key={todo.id} id={todo.id} text={todo.text} completed={todo.complete} strikethrough={true} checkboxchange={this.handlecheck} />
        });

        return (         
         <div>
             <h4>Completed Tasks</h4>
             <h6>You have completed {todos.length} tasks</h6>
             <ul>{ todoli }
             </ul>
             </div>
        );        
    }
}

export default CompletedTaskList;