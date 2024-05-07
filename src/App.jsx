import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQs from "./components/faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <div className="m-8">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
