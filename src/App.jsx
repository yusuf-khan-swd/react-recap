import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
