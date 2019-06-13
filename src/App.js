import React from 'react';
import './App.css';
import PhoneNumberGenerator from './components/phoneNumberGen';
import SignIn from './components/user/user'
import NavBAR from './components/commons/navBar';

function App() {
  return (
    <div className="App">
      <header>
      <NavBAR/>
      </header>
      <p>
          Phone Number generator
        </p>
      <PhoneNumberGenerator />
      <div style={{margin: '100px'}}>
      <SignIn/>
      </div>
    </div>
  );
}

export default App;
