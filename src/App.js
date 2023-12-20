import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';


function App() {
  const appStyle = {
    width: '95%',
    height: '550px',
    border: '3px solid black',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    margin: '20px',
  };

  return (
    <div className="app" style={appStyle}>
      <Header />
      <div className="content">
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;
