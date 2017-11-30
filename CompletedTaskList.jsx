import React from 'react';
import ToDo from './ToDo.jsx'


class CompletedTaskList extends React.Component{
    render(){
        let  todos = this.props.value;     
        var todoli = todos.map((todo) => {
                        return <ToDo key={todos.id} text={todo.text} completed={todo.complete} />
        });

        return (         
         <div>
             <h4>Pending Tasks</h4>
             <ul>{ todoli }
             </ul>
             </div>
        );        
    }
}

export default CompletedTaskList;