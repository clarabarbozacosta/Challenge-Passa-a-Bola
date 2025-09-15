import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Campeonatos from "./pages/Campeonatos";
import Escolinhas from "./pages/Escolinhas";
import Galeria from "./pages/Galeria";
import Jogos from "./pages/Jogos";
import Sobre from "./pages/SobreNos";
import Loja from "./pages/Loja";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Campeonatos />} />
          <Route path="/escolinhas" element={<Escolinhas />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/loja" element={<Loja />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
