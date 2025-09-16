import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import passafofas from "../img/passaBolaFofas.png";
import outraImg from "../img/fofinhas.jpg";

const SobreNos = () => {
  const imagens = [passafofas, outraImg];
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };


  return (
    <main className="pt-16 min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden shadow-lg">
        <img
          src={imagens[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover transition-all duration-500"
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        >
          <ChevronRight size={28} />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {imagens.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl shadow-lg p-6 text-white">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Conheça o Passa a Bola!</h1>
          <p>Mais que um projeto, somos um movimento.</p>
          <p>Criado e liderado por mulheres, queremos mudar o futebol feminino no Brasil com acesso, voz e visibilidade.</p>
          <p>Levamos o jogo a quem nunca teve chance.</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
            💕 Nosso propósito
          </h2>
          <p className="text-purple-600 text-lg">
            O futebol foi proibido para mulheres até os anos 80. Ainda hoje,
            falta estrutura, apoio e respeito.
          </p>
          <p className="text-purple-600 text-lg mt-2">
            O Passa a Bola existe para mudar isso.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">⚽ O que fazemos</h2>
          <ul className="space-y-2">
            <li>Copa Passa a Bola: campeonatos com até 120 mulheres por edição.</li>
            <li>Conteúdo em vídeo, quadros, bastidores e podcast com jogadoras.</li>
            <li>Formação de verdade: cursos sobre clubes, gestão e oportunidades.</li>
          </ul>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
            🌍 Impacto social
          </h2>
          <p className="text-purple-600 text-lg">
            O futebol transforma vidas. Atendemos meninas em periferias e
            pequenas cidades. Valorizamos educação, visibilidade e transformação
            social.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">🤝 Parcerias</h2>
          <p>
            Com apoio da Adidas e Guaraná, buscamos mais marcas e empresas que
            acreditam no futebol feminino.
          </p>
          <p className="mt-2">
            Também abrimos espaço para pequenos negócios e ONGs.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">
            💜 Por que existimos
          </h2>
          <p className="text-purple-600 text-lg">
            Porque meninas ainda são deixadas de lado. Porque o futebol também é
            delas. Porque juntas somos mais fortes. Porque ao nos passar a bola,
            o game toma outro jogo.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SobreNos;
