import copa from "../img/copa.png";

const fakeTeams = [
    "Fênix FC",
    "Estrelas",
    "Guerreiras",
    "Panteras",
    "Águias",
    "Tigresas"
];

const teamImages = [
    "https://placehold.co/48x48?text=Fênix",
    "https://placehold.co/48x48?text=Estrelas",
    "https://placehold.co/48x48?text=Guerreiras",
    "https://placehold.co/48x48?text=Panteras",
    "https://placehold.co/48x48?text=Águias",
    "https://placehold.co/48x48?text=Tigresas"
];

const chaveamento = [
    {
        fase: "Quartas", jogos: [
            { timeA: fakeTeams[0], timeB: fakeTeams[1] },
            { timeA: fakeTeams[2], timeB: fakeTeams[3] },
            { timeA: fakeTeams[4], timeB: fakeTeams[5] }
        ]
    },
    {
        fase: "Semifinal", jogos: [
            { timeA: "Vencedor Jogo 1", timeB: "Vencedor Jogo 2" },
            { timeA: "Vencedor Jogo 3", timeB: "Melhor Perdedor" }
        ]
    },
    {
        fase: "Final", jogos: [
            { timeA: "Vencedor Semi 1", timeB: "Vencedor Semi 2" }
        ]
    }
];

const Campeonato = () => {
    return (
        <main className="pt-16 min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 sm:px-8 py-4">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                            Campeonato Passa a Bola
                        </h1>
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8">
                        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">

                            <div className="order-2 lg:order-1 lg:col-span-3">
                                <h1>⚽ Hora de entrar em campo!</h1>
                                <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                                    O Campeonato Passa a Bola Feminino está chegando, e é a sua chance de mostrar talento, se divertir e viver a emoção do futebol! Monte seu time e venha disputar grandes partidas em um ambiente acolhedor e cheio de energia.
                                </p>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                                    💪 Porque você não pode ficar de fora:
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                                    Jogos emocionantes e cheios de adrenalina, reconhecimento e premiações para os melhores times, uma oportunidade de fortalecer amizades e fazer novas conexões.
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
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 sm:px-8 py-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                            Chaveamento de Times
                        </h2>
                    </div>
                    <div className="p-4 sm:p-6 lg:p-8">
                        {chaveamento.map((fase, idx) => (
                            <div key={fase.fase} className="mb-8">
                                <h3 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4">{fase.fase}</h3>
                                <div className="grid gap-3">
                                    {fase.jogos.map((jogo, i) => (
                                        <div key={i} className="bg-white/80 rounded-lg shadow p-4 flex justify-between items-center">
                                            {idx === 0 ? (
                                                <span className="flex items-center gap-2">
                                                    <img src={teamImages[fakeTeams.indexOf(jogo.timeA)]} alt={jogo.timeA} className="w-10 h-10 rounded-full border-2 border-purple-300 bg-white" />
                                                    <span className="font-bold text-purple-700">{jogo.timeA}</span>
                                                </span>
                                            ) : (
                                                <span className="font-bold text-purple-700">{jogo.timeA}</span>
                                            )}
                                            <span className="text-gray-600 font-bold text-lg">vs</span>
                                            {idx === 0 ? (
                                                <span className="flex items-center gap-2">
                                                    <img src={teamImages[fakeTeams.indexOf(jogo.timeB)]} alt={jogo.timeB} className="w-10 h-10 rounded-full border-2 border-pink-300 bg-white" />
                                                    <span className="font-bold text-pink-700">{jogo.timeB}</span>
                                                </span>
                                            ) : (
                                                <span className="font-bold text-pink-700">{jogo.timeB}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
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