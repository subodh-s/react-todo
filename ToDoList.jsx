import React from 'react';
import PendingToDoList from './PendingToDoList.jsx'
import CompletedToDoList from './CompletedTaskList.jsx'

class ToDoList extends React.Component{

    constructor(){
        super();
        this.state ={
            todos : [
                {
                    id : Date.now(),
                    text: "This is a Test Task 1",
                    complete:false
                },  
                {
                    id : Date.now() + 2,
                    text: "This is a Test Task 2",
                    complete:false
                },
                {
                    id : Date.now() + 3,
                    text: "This is a Test Task 4",
                    complete:true
                }

            ]
        };
    }

    render(){
        
        let {todos} = this.state;

        let pendingToDos = todos.filter((todo) =>{
            return !todo.complete;
        });

        let completedToDos = todos.filter((todo) =>{
            return todo.complete;
        });

        return(
        <div>
             <div>
                <PendingToDoList value={pendingToDos}/>
             </div>
             <div>
                <CompletedToDoList value={completedToDos}/>      
            </div>
        </div>
        );
    }

}

export default ToDoList;