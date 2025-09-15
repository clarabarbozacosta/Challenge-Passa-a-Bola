import React from 'react';

const Campeonato = () => {
  return (
    <main className="pt-24 min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
      {/* Hero Section - Championship Registration */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Campeonato Passa a Bola
            </h1>
          </div>
          
          <div className="p-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Será o seu o time campeão?
              </h2>
              
              {/* Registration Form */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome da equipe:
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Digite o nome da sua equipe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome da capitã:
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Digite o nome da capitã"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      RG da capitã
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                      <div className="text-gray-500">
                        <svg className="mx-auto h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-sm">Anexe seu documento</p>
                        <p className="text-xs text-gray-400">(Frente e verso)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="./images/copa-passa-a-bola.jpg"
                alt="Copa Passa a Bola"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <span className="text-white font-bold text-sm">COPA PASSA A BOLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Games Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Últimos Jogos Femininos
          </h2>
        </div>

        {/* Featured Game */}
        <div className="relative mb-8 group">
          <img
            src="./images/brasil-x-suecia.jpg"
            alt="Brasil X Suécia"
            className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Brasil X Suécia</h3>
            <p className="text-white/90 text-lg max-w-2xl">
              Brasil perde da Suécia, no último jogo antes da Copa América Feminina
            </p>
          </div>
          <div className="absolute top-6 right-6">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white font-semibold">Resultado Final</span>
            </div>
          </div>
        </div>

        {/* Know Passa a Bola Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Conheça o Passa a Bola!</h2>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Confira aqui os jogos que já rolaram e os que ainda vão agitar nossos campos.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Resultados, horários, locais e tudo o que você precisa saber.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-purple-800 font-semibold">Acompanhe os Jogos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brazilian National Team Section */}
        <div className="relative group">
          <img
            src="/img/selecao-brasileira.jpg"
            alt="Seleção Brasileira"
            className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Seleção Brasileira</h3>
            <p className="text-white/90 text-lg max-w-2xl">
              Futebol feminino faz Globo dobrar audiência no Rio e crescer 90% em São Paulo
            </p>
          </div>
          <div className="absolute top-6 right-6">
            <div className="bg-green-500/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white font-semibold">🇧🇷 Brasil</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photos Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Fotos do seu time</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Campeonato;