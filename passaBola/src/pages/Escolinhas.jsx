import escola1 from '../img/escolas/escola1.png';
import escola2 from '../img/escolas/escola2.png';
import escola3 from '../img/escolas/escola3.png';

const escolinhas = [
    {
        nome: "Escola Carpinelli",
        foto: escola1,
        endereco: "Av. Prof. Conrado de Deo, 132 - Campo Limpo, São Paulo - SP, 05788-360",
        categorias: ["Sub-8", "Sub-10", "Sub-12", "Sub-14", "Sub-16"]
    },
    {
        nome: "Ginásio Taboão da Serra",
        foto: escola2,
        endereco: "Parque Monte Alegre, Taboão da Serra - SP, 06756-060",
        categorias: ["Sub-8", "Sub-10", "Sub-12", "Sub-14", "Sub-16"]
    },
    {
        nome: "Ribeirão Pires F.C.",
        foto: escola3,
        endereco: "Av. Pref. Valdírio Prisco, 330 - Centro, Ribeirão Pires - SP, 09400-005",
        categorias: ["Sub-8", "Sub-10", "Sub-12", "Sub-14", "Sub-16", "Sub-18"]
    }
];

const Escolinhas = () => {
    return (
        <main className="pt-16 min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 sm:px-8 py-4">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                            Escolinhas e Peneiras
                        </h1>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {escolinhas.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
                                <img
                                    src={item.foto}
                                    alt={item.nome}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#6B6B6B' }}>
                                {item.nome}
                            </h2>
                            <p className="text-base mb-2" style={{ color: '#6B6B6B' }}>
                                <strong>Categorias:</strong> {item.categorias.join(", ")}
                            </p>
                            <p className="text-base mb-3" style={{ color: '#6B6B6B' }}>
                                <strong>Endereço:</strong> {item.endereco}
                            </p>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.endereco)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    🗺️ Abrir no Google Maps
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Escolinhas;
