import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/todoItem';

class App extends Component {

  constructor() {
    super();
    this.TodoItem=[
      {title: 'Mua bim bim'},
      {title: 'di da bong'},
      {title: 'di do xang'}
    ];
  }

  render() {
      return (
    <div className="App">
    {
      this.TodoItem.map((todoItem,index) =><TodoItem key= {index}  title ={todoItem.title}/>)
    }      
    </div>
  );
  }
}

export default App;
