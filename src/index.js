import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Incriment from './component/Incriment';
import ClassComponent from './component/ClassComponent';
import State from './component/State';
import HideAndShow from './component/HideAndShow';
import EventHandling from './component/EventHandling';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

