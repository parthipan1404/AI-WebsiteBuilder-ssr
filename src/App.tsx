import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPage from "./components/Herosections";
import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import Layout from "./components/Layout";
import Demo from "./components/Demo";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Layout />
      <Demo/>
      <Footer />
    </>
  );
}

export default App;
