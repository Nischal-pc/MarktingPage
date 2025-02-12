import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Map from "./components/Map";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ToastContainer />
      <main>
        <Hero />
        <HowItWorks />
        <FAQ />
        <Testimonials />
      </main>
      <Map />
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Weaver Eco Home. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
