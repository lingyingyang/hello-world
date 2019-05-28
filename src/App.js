import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ClickCounter from './components/hoc/ClickCounter';
import HoverCounter from './components/hoc/HoverCounter';
import ClickCounterTwo from './components/render-props/ClickCounterTwo';
import Counter from './components/render-props/Counter';
import HoverCounterTwo from './components/render-props/HoverCounterTwo';

function App() {
  return (
    <div className="App">
      <h2>Render Props</h2>
      <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )} />


      {/* <h2>HOC - Higher Order components</h2>
      <ClickCounter />
      <HoverCounter /> */}

      {/* <ParentComponent /> */}
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
