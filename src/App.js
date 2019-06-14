import React from 'react';
import './App.css';
// import PhoneNumberGenerator from './components/phoneNumberGen';
// import SignIn from './components/user/user'
import NavBAR from './components/commons/navBar';
import Generator from './components/generator';

function App() {
  return (
    <div className="App">
      <header>
      <NavBAR/>
      </header>
      {/* <PhoneNumberGenerator /> */}
      <div style={{margin: '100px'}}>
      <Generator/>
      {/* <SignIn/> */}
      </div>
    </div>
  );
}

export default App;
