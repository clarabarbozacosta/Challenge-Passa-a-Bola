import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Campeonato from "./pages/Campeonato";
import Escolinhas from "./pages/Escolinhas";
import Jogos from "./pages/Jogos";
import SobreNos from "./pages/SobreNos";
import Login from "./pages/Login";
import Loja from "./pages/Loja";
import Fotos from "./pages/Fotos";
import Historia from "./pages/Historia";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Jogos />} />
          <Route path="campeonato" element={<Campeonato />} />
          <Route path="escolinhas" element={<Escolinhas />} />
          <Route path="fotos" element={<Fotos />} />
          <Route path="jogos" element={<Jogos />} />
          <Route path="sobre" element={<SobreNos />} />
          <Route path="login" element={<Login />} />
          <Route path="loja" element={<Loja />} />
          <Route path="historia" element={<Historia />} />
          
          <Route path="*" element={
            <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl mb-8">Página não encontrada</p>
                <a 
                  href="/" 
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Voltar ao Início
                </a>
              </div>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;