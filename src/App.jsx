//libraries
import { Switch, Route } from 'react-router-dom'
//components
import Navbar from './components/Navbar';
import Login from "./components/Login";
import Listado from "./components/Listado";
import Footer from './components/Footer';
//styles
import './css/bootstrap.min.css';
import './css/App.css'

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
      <Footer />
    </>
  );
}

export default App;
