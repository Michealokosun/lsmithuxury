import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Navbar";
import { Separator } from "./components/ui/separator";
import LoginPage from "./app/login/page";
import RegisterPage from "./app/register/Register";
import { HomePage } from "./app/Home/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Separator />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
