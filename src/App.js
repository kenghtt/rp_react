import logo from './logo.svg';
import './App.css';
import Logo from "./components/Logo/Logo";
// import something from "../src/assets/img/logo.svg"
import something from "./assets/img/logo1.svg"

import React from "react";
import Container from "./components/Container/Container";
import 'react-calendar/dist/Calendar.css'


function App() {
  return (
    <div className="App">

      {/*<Logo></Logo>*/}

        <Container/>

    </div>
  );
}

export default App;
