import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Components/Contex";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";

function App() {
  const { isAuthenticated } = useContext(Context);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          {/* <Route path="/" element={<Login />} /> */}
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </>
        ) : (
          <Route path="/" element={<Login />} exact />
  
          )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
