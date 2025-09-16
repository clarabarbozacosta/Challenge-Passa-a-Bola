import { useState } from "react";
import bone from "../img/produtos/bone.jpg";
import camiseta1 from "../img/produtos/camiseta1.jpg";
import camiseta2 from "../img/produtos/camiseta2.jpg";
import camiseta3 from "../img/produtos/camiseta3.jpg";
import garrafa from "../img/produtos/garrafa.jpg";
import sacochila from "../img/produtos/mochila.jpg";


const produtos = [
    {
        id: 1,
        nome: "Camiseta Passa a Bola",
        preco: 59.90,
        imagem: camiseta1,
    },
    {
        id: 2,
        nome: "Camiseta Passa a Bola",
        preco: 59.90,
        imagem: camiseta2,
    },
    {
        id: 3,
        nome: "Camiseta Passa a Bola",
        preco: 59.90,
        imagem: camiseta3,
    },
    {
        id: 4,
        nome: "Boné Personalizado",
        preco: 39.90,
        imagem: bone,
    },
    {
        id: 5,
        nome: "Garrafa Personalizada",
        preco: 29.90,
        imagem: garrafa,
    },
    {
        id: 6,
        nome: "Sacochila",
        preco: 24.90,
        imagem: sacochila,
    },
];

const Loja = () => {
    const [mensagem, setMensagem] = useState("");

    const handleComprar = (nome) => {
        setMensagem(`Produto "${nome}" adicionado ao carrinho!`);
        setTimeout(() => setMensagem(""), 2000);
    };

    return (
        <main className="pt-16 min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Loja Passa a Bola</h1>
                    <p className="text-white/90 text-lg">Confira nossos produtos oficiais!</p>
                </div>
                {mensagem && (
                    <div className="mb-6 text-center">
                        <span className="bg-green-500/90 text-white px-4 py-2 rounded-lg font-semibold shadow">{mensagem}</span>
                    </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {produtos.map((produto) => (
                        <div key={produto.id} className="bg-white/95 rounded-2xl shadow-2xl p-6 flex flex-col items-center">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 aspect-square mb-4 rounded-xl overflow-hidden shadow">
                                <img
                                    src={produto.imagem}
                                    alt={produto.nome}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-xl font-bold text-purple-700 mb-2">{produto.nome}</h2>
                            <span className="text-lg font-semibold text-pink-600 mb-4">R$ {produto.preco.toFixed(2)}</span>
                            <button
                                onClick={() => handleComprar(produto.nome)}
                                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all shadow"
                            >
                                Comprar
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <div className="sticky bottom-0 left-0 w-full flex justify-end pointer-events-none">
                <div className="pointer-events-auto p-4">
                    <button
                        className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold px-6 py-4 rounded-full shadow-lg flex items-center gap-2 hover:from-purple-700 hover:to-pink-600 transition-all"
                        aria-label="Abrir carrinho"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h12.2a1 1 0 00.9-1.3L17 13M7 13V6h13" />
                        </svg>
                        Carrinho
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Loja;