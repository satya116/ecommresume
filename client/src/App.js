import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import CartPage from './pages/cart/CartPage';

import ContextProvider from './context/ContextProvider'
import Pg from "./pages/pg/Pg";
import DetailView from "./components/product/DetailView";

function App() {
  return (
    <>
    <ContextProvider>

    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/cart" element={<CartPage />}></Route>

          <Route exact path="/product/:id" element={<DetailView />}></Route>
          
          <Route exact path="/pg" element={<Pg />}></Route>
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
