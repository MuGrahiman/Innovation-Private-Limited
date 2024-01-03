import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './Components/Contex';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const { isAuthenticated } = useContext(Context);
  console.log(isAuthenticated)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Login />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
 