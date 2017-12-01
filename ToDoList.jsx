import React from 'react';
import PendingToDoList from './PendingToDoList.jsx'
import CompletedToDoList from './CompletedTaskList.jsx'

class ToDoList extends React.Component{

    constructor(){
        super();
        this.handlechange = this.handlechange.bind(this);

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


    handlechange(id,ischecked){
        let arr = this.state.todos;
         for (const a in arr){
             if(arr[a].id == id){   
                 if(ischecked)     {        
                    arr[a].complete=true;
                 }
                 else{
                    arr[a].complete=false;
                 }
             }
         }
       
         this.setState({
             todos : arr
         });

        
     }

     handleClose(id){
        let arr = this.state.todos.filter(x => !(x.id == id));        
       
         this.setState({
             todos : arr
         });

        
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
                <PendingToDoList value={pendingToDos} onchange={this.handlechange} onclose={this.handleClose}/>
             </div>
             <div>
                <CompletedToDoList value={completedToDos} onchange={this.handlechange}/>      
            </div>
        </div>
        );
    }

}

export default ToDoList;