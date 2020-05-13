import React, { Component } from 'react';
import './App.css';
import SurveyContainer from './containers/Survey'
class App extends Component {
  render() {
    return (
      <div className="App"> 
         <SurveyContainer />
      </div>
    );
  }
}

export default App;
