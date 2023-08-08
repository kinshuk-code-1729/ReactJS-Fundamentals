import React from 'react';
import './App.css';
import HelloFunctional from './React-Components/HelloFunctional';
import HelloClass from './React-Components/HelloClass';
// import HelloES6 from './React-Components/HelloFunctionalES6'; // default import
// named import is always imported within {}.
import {HelloFunctionalES6} from './React-Components/HelloFunctionalES6';
import Show from './React-Components/Show';
import Welcome from './React-Components/Welcome';
import Count from './React-Components/Count';
import FormComponent from './React-Components/FormComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello App Component</h1>
      <HelloFunctional></HelloFunctional>
      <HelloFunctional></HelloFunctional>
      <HelloFunctional/>
      <HelloClass name="Sid" age="16"/>
      <HelloClass name="Sam" age="27"/>
      {/* <HelloES6/> */}
      <HelloFunctionalES6/>
      <Show Fname="Raj" Lname="Sen" age="21">
        <p>Text Data by Raj</p>  
      </Show> <br/>
      <Show Fname="Suresh" Lname="Bose" age="32">
        <input type="text" placeholder="Enter Your details" />
      </Show>
      <Welcome/>
      <Count/>
      <FormComponent/>
    </div>
  );
}

export default App;
