import { ToastContainer } from 'react-toastify';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './components/Home';
import AddEdit from './components/Add';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer position="center"/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/addContact" element={<AddEdit/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
