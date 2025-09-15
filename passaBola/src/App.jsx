import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Campeonatos from "./pages/Campeonato";
import Escolinhas from "./pages/Escolinhas";
import Jogos from "./pages/Jogos";
import SobreNos from "./pages/SobreNos";
import Loja from "./pages/Loja";
import Fotos from "./pages/Fotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Campeonatos />} />
          <Route path="/escolinhas" element={<Escolinhas />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/loja" element={<Loja />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
