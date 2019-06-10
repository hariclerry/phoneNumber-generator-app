import React from 'react';
import './App.css';
import PhoneNumberGenerator from './components/phoneNumberGen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Phone Number generator
        </p>
      </header>
      <PhoneNumberGenerator />
    </div>
  );
}

export default App;
