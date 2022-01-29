// import logo from './logo.svg';
// import { Route } from "react-router-dom";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Main from './components/Main';

function App() {
  return (
    <Router>
    <Routes>
    <Route exact path ="/Main" element={<Main />} />
    <Route exact path ="/" element={<Login />} />
    <Route exact path ="/Login" element={<Login />} />
    <Route path ="/Register" element={<Register />} />
    </Routes>
    </Router>
  );
}

export default App;
