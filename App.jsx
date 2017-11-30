import React from 'react';
import ToDoList from './ToDoList.jsx';


class App extends React.Component {

  constructor(){
      super();
  }

  render() {
    return (
      <ToDoList />
    );
  }
}

export default App;
