import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick />
      <Counter></Counter>
      <Message />
      <Greet name="Philip" heroName="Superman" />
      <Greet name="Clark" heroName="Batman" />
      <Greet name="Bruce" heroName="Spiderman" />
      <Welcome name="Katherine" heroName="Super woman"/> */}
    </div>
  );
}

export default App;
