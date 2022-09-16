import './App.css';
import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CMPE281 – Cloud Technology</h1>
        <h2>Lab #1 Assignment – Playing with Amazon’s EC2</h2>
        <p>
          Deploying an application into AWS Cloud and monitoring performance and resource usage of application using Amazon’s CloudWatch.
        </p>
        <img src={logo} alt="Logo" />;
      </header>
    </div>
  );
}

export default App;
