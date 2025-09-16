import brasilxsuecia from "../img/brasilxsuecia.webp";
import selecao from "../img/selecao.webp";
import { useNavigate } from "react-router-dom";

const Jogos = () => {
    const navigate = useNavigate();

    const handleInscricaoClick = () => {
        navigate("/campeonato"); // Use a rota, não o caminho do arquivo
    };

    return (
        <main className="pt-16 min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 rounded-xl shadow-inner border border-purple-200">
                    <div className="text-center">
                        <button
                            onClick={handleInscricaoClick}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-5 px-8 rounded-xl hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 text-lg sm:text-xl mb-4"
                        >
                            <div className="flex items-center justify-center space-x-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                <span>Inscreva sua Equipe para o Campeonato Passa a Bola Aqui</span>
                            </div>
                        </button>
                        <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Inscrição gratuita</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span>Processo rápido</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                    <div className="hidden lg:block">
                                        <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl flex justify-end">
                                            <button
                                                onClick={() => window.open("https://www.instagram.com/stories/highlights/17940103676679380/", "_blank")}
                                                className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-pink-600 transition-colors"
                                            >
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                </svg>
                                                Acompanhe os Jogos
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <span className="text-white font-semibold text-xs sm:text-sm">Brasil</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Jogos;