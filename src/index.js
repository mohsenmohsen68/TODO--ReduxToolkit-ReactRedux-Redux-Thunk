import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/counterStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => root.render(
  <Provider store={store}>
    {console.log(store)}
    <App />
  </Provider>
);

render()
store.subscribe(render)



