import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const handleAuthenticated = ()=>setIsAuthenticated(true)
  return (
    <BrowserRouter >
    <Routes>
    {/* <Route path='/' element={<Login/>}/> */}
    <Route path='/' element={isAuthenticated?<Home/>:<Login setAuth={handleAuthenticated}/>}/></Routes>
    </BrowserRouter>
  );
}

export default App;
