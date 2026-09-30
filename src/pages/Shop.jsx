import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const allProducts = [
  { id: 1, name: 'Cyber Jacket', price: 'R$ 299', category: 'Roupas' },
  { id: 2, name: 'Neon Sneakers', price: 'R$ 499', category: 'Calçados' },
  { id: 3, name: 'Holo Visor', price: 'R$ 199', category: 'Acessórios' },
  { id: 4, name: 'Smart Ring', price: 'R$ 150', category: 'Acessórios' },
  { id: 5, name: 'Tech Pants', price: 'R$ 250', category: 'Roupas' },
  { id: 6, name: 'Quantum Watch', price: 'R$ 899', category: 'Acessórios' },
  { id: 7, name: 'Gravity Boots', price: 'R$ 650', category: 'Calçados' },
  { id: 8, name: 'Neural Implant (Fake)', price: 'R$ 99', category: 'Acessórios' },
];

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(allProducts.map(p => p.category))];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-white border-l-4 border-neon-purple pl-4">
          Catálogo <span className="text-gradient">Completo</span>
        </h1>

        {/* Search & Filter Bar */}
        <div className="glass p-4 rounded-2xl mb-10 flex flex-col md:flex-row gap-4 justify-between items-center z-10 relative">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Buscar produtos..." 
              className="w-full bg-dark-800 border border-gray-700 text-white rounded-full py-3 pl-12 pr-4 focus:outline-none focus:border-neon-blue transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-neon-purple text-white shadow-[0_0_15px_rgba(176,38,255,0.4)]' 
                    : 'bg-dark-800 text-gray-400 hover:text-white border border-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="glass rounded-xl p-5 hover:-translate-y-2 transition-transform duration-300 group">
                <div className="h-40 w-full bg-dark-700 rounded-lg mb-4 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-700 opacity-50"></div>
                  <span className="relative text-gray-500 font-mono text-sm opacity-50">{product.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">{product.price}</span>
                  <button className="bg-white/10 hover:bg-neon-blue text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    +
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-400">
              <p className="text-xl">Nenhum produto encontrado para sua busca.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
