import { ToastContainer } from 'react-toastify';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer position="center"/>
      <Switch>
        <Route exact path="/" component={Home}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
