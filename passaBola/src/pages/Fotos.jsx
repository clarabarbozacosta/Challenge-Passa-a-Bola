import { useState } from 'react';
import foto1 from '../img/fotos/1.png';
import foto2 from '../img/fotos/2.png';
import foto3 from '../img/fotos/3.png';
import foto4 from '../img/fotos/4.png';
import foto5 from '../img/fotos/5.png';
import foto6 from '../img/fotos/6.png';
import foto7 from '../img/fotos/7.png';
import foto8 from '../img/fotos/8.png';
import foto9 from '../img/fotos/9.png';
import foto10 from '../img/fotos/10.png';

const Fotos = () => {
  const [activeCategory, setActiveCategory] = useState('todas');

  const categories = [
    { id: 'todas', name: 'Todas as Fotos', count: 10 },
    { id: 'jogos', name: 'Jogos', count: 3 },
    { id: 'treinos', name: 'Treinos', count: 5 },
    { id: 'eventos', name: 'Eventos', count: 2 },
  ];

  const photos = [
    { id: 1, category: 'jogos', size: 'large', imagem: foto1 },
    { id: 2, category: 'treinos', size: 'normal', imagem: foto2 },
    { id: 3, category: 'jogos', size: 'normal', imagem: foto3 },
    { id: 4, category: 'eventos', size: 'wide', imagem: foto4 },
    { id: 5, category: 'treinos', size: 'normal', imagem: foto5 },
    { id: 6, category: 'jogos', size: 'normal', imagem: foto6 },
    { id: 7, category: 'eventos', size: 'large', imagem: foto7 },
    { id: 8, category: 'treinos', size: 'normal', imagem: foto8 },
    { id: 9, category: 'jogos', size: 'normal', imagem: foto9 },
    { id: 10, category: 'treinos', size: 'wide', imagem: foto10 }
  ];

  const filteredPhotos = activeCategory === 'todas'
    ? photos
    : photos.filter(photo => photo.category === activeCategory);

  const getPhotoClasses = (size) => {
    const baseClasses = "relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300";
    switch (size) {
      case 'large':
        return `${baseClasses} col-span-2 row-span-2`;
      case 'wide':
        return `${baseClasses} col-span-2`;
      default:
        return baseClasses;
    }
  };

  const getImageClasses = (size) => {
    const baseClasses = "w-full object-cover transition-transform duration-300 group-hover:scale-110";
    switch (size) {
      case 'large':
        return `${baseClasses} h-full min-h-[300px]`;
      case 'wide':
        return `${baseClasses} h-48 sm:h-64`;
      default:
        return `${baseClasses} h-32 sm:h-48 lg:h-56`;
    }
  };

  return (
    <main className="pt-16 min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Galeria de Fotos
          </h1>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto">
            Reviva os melhores momentos do Passa a Bola através das nossas fotos
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-white text-purple-600 shadow-lg transform scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 auto-rows-max">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className={getPhotoClasses(photo.size)}>
              <img src={photo.imagem} alt={photo.category} className={getImageClasses(photo.size)} />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="font-semibold capitalize text-sm">
                    {photo.category} #{photo.id}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Compartilhe suas Fotos
            </h2>
            <p className="text-gray-600 mb-8">
              Tem fotos incríveis do seu time? Compartilhe conosco!
            </p>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 hover:border-purple-400 transition-colors cursor-pointer group">
              <div className="text-gray-500 group-hover:text-purple-500 transition-colors">
                <svg className="mx-auto h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-xl font-semibold mb-2">Clique para fazer upload</p>
                <p className="text-sm text-gray-400">ou arraste e solte suas fotos aqui</p>
                <p className="text-xs text-gray-400 mt-2">JPG, PNG até 10MB cada</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                Selecionar Fotos
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Fotos;