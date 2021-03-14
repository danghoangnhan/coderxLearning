import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/todoItem';
import TrafficLight from './components/TrafficLight';


const RED    = 0;
const ORANGE = 1;
const GREEN  = 2;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCoLor: RED,
    };
    this.TodoItem = [
      { title: "Mua bim bim", isComplete: true },
      { title: "di da bong", isComplete: false },
      { title: "di do xang", isComplete: true },
    ];
    setInterval(() => {
      this.setState({
        currentCoLor: this.getNextColor(this.state.currentCoLor),
        });
      }, 1000);
  }
  getNextColor(coLor) {
    switch (coLor) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  }

  render() {
    const {currentCoLor}=this.state;
    return (
      <div className="App">
        {this.TodoItem.map((todoItem, index) => (
          <TodoItem key={index} TodoItem={todoItem} />
        ))}
        <TrafficLight currentCoLor={currentCoLor}/>
      </div>
    );
  }
}

export default App;
