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
import { UserProvider } from './components/context/UserControl';
import ComponentC from './components/context/ComponentC'
import PostList from './components/http/PostList';
import PostForm from './components/http/PostForm';
import HookCounter from './components/hook/HookCounter';
import HookCounterThree from './components/hook/HookCounterThree';
import HookCounterFour from './components/hook/HookCounterFour';
import HookClickOne from './components/hook/useEffect/HookClickOne';

function App() {
  return (
    <div className="App">

      <h1>Hook - useEffect</h1>
      <HookClickOne />

      <h1>Hook - useState</h1>
      <HookCounter></HookCounter>
      <HookCounterThree />
      <HookCounterFour />

      <h1>Http</h1>
      <PostForm />
      <PostList />

      <h1>Context</h1>
      <UserProvider value="Philip">
        <ComponentC></ComponentC>
      </UserProvider>

      <h1>Render Props</h1>
      <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )} />

      {/* <h1>HOC - Higher Order components</h1>
      <ClickCounter />
      <HoverCounter /> */}

      {/* <h1>Foundamental Concepts</h1>
      <ParentComponent />
      <EventBind />
      <FunctionClick />
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
