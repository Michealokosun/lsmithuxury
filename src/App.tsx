import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./app/login/page";
import RegisterPage from "./app/register/Register";
import { HomePage } from "./app/Home/Home";
import { Footer } from "./components/Footer";
import { ProductDetails } from "./app/Home/productDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path=":slug" element={<ProductDetails />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
