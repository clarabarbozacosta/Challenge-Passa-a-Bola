import historia1 from "../img/1.jpg";
import historia2 from "../img/internacional.webp";
import historia3 from "../img/3.jpg";
import historia4 from "../img/4.jpg";

const Historia = () => {
    return (
        <main className="pt-16 min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                    <h1 className="text-xl sm:text-2xl font-bold text-purple-600 mb-4">História do Futebol</h1>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
                            <img 
                                src={historia1} 
                                alt="Futebol feminino no Brasil" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold mb-3" style={{color: '#6B6B6B'}}>
                            Futebol feminino no Brasil
                        </h2>
                        <p className="text-base mb-3" style={{color: '#6B6B6B'}}>
                            O futebol feminino no Brasil foi proibido entre 1941 e 1979, considerado inadequado para mulheres, apesar de já ser praticado há décadas.
                        </p>
                        <p className="text-base" style={{color: '#6B6B6B'}}>
                            Mesmo assim, pioneiras continuaram jogando informalmente, e a legalização em 1979 abriu caminho para clubes, campeonatos e a formação da seleção brasileira, referência no cenário internacional.
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
                            <img 
                                src={historia2} 
                                alt="História do futebol feminino internacional" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold mb-3" style={{color: '#6B6B6B'}}>
                            História do futebol feminino internacionalmente
                        </h2>
                        <p className="text-base" style={{color: '#6B6B6B'}}>
                            O futebol feminino cresce globalmente, com seleções como EUA, Alemanha e França conquistando títulos e atraindo público, mostrando o grande potencial da modalidade.
                        </p>
                        <p className="text-base" style={{color: '#6B6B6B'}}>
                            Para o Brasil, esse cenário é inspiração e desafio: competir internacionalmente pressiona por mais investimento e ajuda as jogadoras a se destacarem no futebol mundial.
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
                            <img 
                                src={historia3} 
                                alt="Primeiras Competições" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold mb-3" style={{color: '#6B6B6B'}}>
                            Primeiras Competições
                        </h2>
                        <p className="text-base" style={{color: '#6B6B6B'}}>
                            O futebol feminino surgiu oficialmente no início do século XX, mas enfrentou forte resistência social que limitava a participação das mulheres no esporte.
                        </p>
                        <p className="text-base" style={{color: '#6B6B6B'}}>
                            Somente a partir da década de 1970, com o surgimento de federações e campeonatos oficiais, o futebol feminino começou a se estruturar e conquistar espaço, graças à luta das pioneiras por igualdade e reconhecimento.
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
                            <img 
                                src={historia4} 
                                alt="Conquistas Históricas" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold mb-3" style={{color: '#6B6B6B'}}>
                            Conquistas Históricas
                        </h2>
                        <p className="text-base" style={{color: '#6B6B6B'}}>
                            Desde a primeira Copa do Mundo Feminina, em 1991, o futebol feminino vem conquistando espaço e reconhecimento no cenário internacional, superando preconceitos e ganhando visibilidade.
                        </p>
                        <p className="text-base" style={{color: '#6B6B6B'}}>
                            Ao longo dos anos, títulos e participações memoráveis em Mundiais e Jogos Olímpicos consolidaram a modalidade, estabelecendo marcos importantes para a história do esporte e inspirando novas gerações de jogadoras.
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Historia;