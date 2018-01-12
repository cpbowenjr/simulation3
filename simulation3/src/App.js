import React, { Component } from 'react';
import './App.css';
// import helo from './helo.png';
import {Route, Switch} from 'react-router-dom';
import dashboard from './components/dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <div className="parent-containter">
        <div className='center-box'>
        <div className='image-container'></div>
          {/* <img className="logo-image" src={helo}/> */}
            <h1 className='center-text'>Helo</h1>
            <div className='child-container'>
              <button onClick={dashboard}className="action-button">Login / Register</button>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
