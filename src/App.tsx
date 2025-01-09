import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPage from "./components/Herosections";
import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Layout />
      <Footer />
    </>
  );
}

export default App;
