import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Welcome from './components/Welcome';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Message />
      <Greet name="Philip" />
      <Greet name="Clark" />
      <Greet name="Bruce" />
      <Welcome/>
    </div>
  );
}

export default App;
