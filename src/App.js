import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context/Contex";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
import useAuth from "./Hooks/useAuth";

function App() {
  const Auth = useAuth();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Auth component={Home} />} />
        <Route path="/cart" element={<Auth component={Cart} />} />
        <Route path="/" element={<Login />} exact />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
