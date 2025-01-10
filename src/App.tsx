import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroPage from "./components/Herosections";
import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import Layout from "./components/Layout";
import Demo from "./components/Demo";
import Faq from "./components/Faq";
import AIWebsitePromo from "./components/AIWebsitePromo";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Layout />
      <Demo />
      <AIWebsitePromo />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
