import { Navbar } from "./components/layout/Navbar.jsx";
import { Footer } from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import "./index.css";
function App() {
  return (
    <div>
      <Navbar />
      <main className="p-6 space-y-12">
        <Home />
        <hr className="border-gray-200" />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;