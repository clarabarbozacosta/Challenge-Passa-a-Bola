import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Campeonatos() {
  const campeonatos = [
    {
      id: 1,
      nome: "Campeonato Brasileiro",
      imagem: "https://upload.wikimedia.org/wikipedia/pt/6/6f/Campeonato_Brasileiro_S%C3%A9rie_A_logo.png",
      descricao: "A maior competição de clubes do Brasil.",
    },
    {
      id: 2,
      nome: "Copa do Brasil",
      imagem: "https://upload.wikimedia.org/wikipedia/pt/f/f7/Copa_do_Brasil_logo.png",
      descricao: "Torneio eliminatório com clubes de todo o país.",
    },
    {
      id: 3,
      nome: "Libertadores",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Copa_Libertadores_logo.png/600px-Copa_Libertadores_logo.png",
      descricao: "O torneio mais prestigiado da América do Sul.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-purple-800 text-center mb-8">
        Campeonatos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {campeonatos.map((c) => (
          <Card key={c.id} className="shadow-lg hover:shadow-xl transition">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <img
                src={c.imagem}
                alt={c.nome}
                className="w-32 h-32 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold">{c.nome}</h2>
              <p className="text-sm text-gray-600 mb-4">{c.descricao}</p>
              <Button className="bg-purple-700 hover:bg-purple-900 text-white">
                Ver detalhes
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
