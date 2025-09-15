import copa from "../img/copa.png";
import brasilxsuecia from "../img/brasilxsuecia.webp";
import selecao from "../img/selecao.webp";

const Campeonato = () => {
  return (
    <main className="pt-16 min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
      {/* Seção Principal do Campeonato */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 sm:px-8 py-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Campeonato Passa a Bola
            </h1>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
              {/* Coluna de Texto e Formulário */}
              <div className="order-2 lg:order-1 lg:col-span-3">
                <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged.
                </p>
                
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                  Será o seu o time campeão?
                </h2>
                
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-inner">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome da equipe:
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                        placeholder="Digite o nome da sua equipe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome da capitã:
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                        placeholder="Digite o nome da capitã"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        RG da capitã
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                        <div className="text-gray-500">
                          <svg className="mx-auto h-8 sm:h-12 w-8 sm:w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="text-sm">Anexe seu documento</p>
                          <p className="text-xs text-gray-400">(Frente e verso)</p>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Inscrever Equipe
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Coluna da Imagem */}
              <div className="order-1 lg:order-2 lg:col-span-2">
                <div className="relative">
                  <img
                    src={copa}
                    alt="Copa Passa a Bola"
                    className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-contain bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl shadow-lg p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Últimos Jogos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Últimos Jogos Femininos
          </h2>
        </div>

        <div className="relative mb-8 group">
          <img
            src={brasilxsuecia}
            alt="Brasil X Suécia"
            className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2">Brasil X Suécia</h3>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl">
              Brasil perde da Suécia, no último jogo antes da Copa América Feminina
            </p>
          </div>
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
            <div className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
              <span className="text-white font-semibold text-xs sm:text-sm">Resultado Final</span>
            </div>
          </div>
        </div>

        {/* Seção Conheça o Passa a Bola */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4">Conheça o Passa a Bola!</h2>
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                Confira aqui os jogos que já rolaram e os que ainda vão agitar nossos campos.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Resultados, horários, locais e tudo o que você precisa saber.
              </p>
            </div>
            <div className="hidden lg:block">
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

        {/* Seleção Brasileira */}
        <div className="relative group">
          <img
            src={selecao}
            alt="Seleção Brasileira"
            className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2">Seleção Brasileira</h3>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl">
              Futebol feminino faz Globo dobrar audiência no Rio e crescer 90% em São Paulo
            </p>
          </div>
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
            <div className="bg-green-500/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
              <span className="text-white font-semibold text-xs sm:text-sm">🇧🇷 Brasil</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Fotos do Time */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">Fotos do seu time</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white/70" fill="currentColor" viewBox="0 0 20 20">
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