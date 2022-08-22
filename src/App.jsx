
//libraries
import React from "react";

import { Switch, Route } from 'react-router-dom'
//components
import Navbar from './components/Navbar';
import Login from "./components/Login";
import Listado from "./components/Listado";
//styles
import './css/bootstrap.min.css';
import './css/App.css'
import { Form } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar />
      <div className='container mt-3'>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Listado" component={Listado} />
          
        </Switch>
      </div>
   
    </>
  );
}

export default App;
