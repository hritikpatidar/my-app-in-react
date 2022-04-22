import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Incriment from './component/Incriment';
import ClassComponent from './component/ClassComponent';
import State from './component/State';
import HideAndShow from './component/HideAndShow';
import EventHandling from './component/EventHandling';
import ComponentDidMount from './component/ComponentDidMount';
import ComponentDidUpdate from './component/ComponentDidUpdate';
import ComponentWillUnmount from './component/ComponentWillUnmount';
import Hooks from './component/Hooks';
import StateAssigementWithRFC from './component/StateAssigementWithRFC';
import StateAssigementWithRCC from './component/StateAssigementWithRCC';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateAssigementWithRCC />
    <hr/>
    <StateAssigementWithRFC />
    <hr/>
    <App />
    <hr/>
    <Incriment />
    <hr/>
    <ClassComponent />
    <hr/>
    <State />
    <hr/>
    <HideAndShow />
    <hr/>
    <EventHandling />
    <hr/>
    <ComponentDidMount />
    <hr/>
    <ComponentDidUpdate />
    <hr/>
    <ComponentWillUnmount />
    <hr/>
    <Hooks />
  </React.StrictMode>
);

