import FAQs from "./components/faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="m-8">
            <BrowserRouter>
                <Navbar />
                <Hero />
                <FAQs />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
