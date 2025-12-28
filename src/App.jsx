import Navbar from "./components/Navbar";
import SobreNosotros from "./components/SobreNosotros";
import Galeria from "./components/Galeria";
import Servicios from "./components/Servicios";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <SobreNosotros />
      <Galeria />
      <Servicios />
      <Footer />
      {/* Resto de tu contenido */}
    </>
  );
}

export default App;
