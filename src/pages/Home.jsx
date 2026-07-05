import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Shortener from "../components/Shortener";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Shortener />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;