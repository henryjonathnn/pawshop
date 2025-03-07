import { component$ } from '@builder.io/qwik';

export const ProductSection = component$(() => {
  const products = [
    { 
      id: 1, 
      name: 'Neon Collar', 
      price: '$29.99', 
      category: 'Accessories',
      rating: 4.8
    },
    { 
      id: 2, 
      name: 'Holographic Food Bowl', 
      price: '$39.99', 
      category: 'Feeding',
      rating: 4.7
    },
    { 
      id: 3, 
      name: 'AR Pet Tracker', 
      price: '$59.99', 
      category: 'Tech',
      rating: 4.9
    },
    { 
      id: 4, 
      name: 'Digital Pet Bed', 
      price: '$89.99', 
      category: 'Furniture',
      rating: 4.6
    }
  ];
  
  return (
    <div class="py-20 px-4 relative">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Trending Products</h2>
          <p class="text-purple-200 max-w-2xl mx-auto">Discover our futuristic pet products that blend digital innovation with pet care excellence.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} class="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-md rounded-xl border border-purple-500/30 overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div class="p-4">
                <div class="relative aspect-square mb-4 bg-purple-800/30 rounded-lg overflow-hidden">
                  <img src={`/api/placeholder/300/300`} alt={product.name} class="w-full h-full object-cover" />
                  <div class="absolute top-2 right-2 bg-purple-600 text-xs rounded-full px-2 py-1">{product.category}</div>
                </div>
                <h3 class="text-lg font-bold mb-1">{product.name}</h3>
                <div class="flex items-center mb-2">
                  <div class="flex text-yellow-400">
                    ★★★★★
                  </div>
                  <span class="text-xs ml-1 text-purple-300">{product.rating}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-bold text-xl">{product.price}</span>
                  <button class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div class="mt-12 text-center">
          <button class="px-8 py-3 bg-transparent border border-purple-400 rounded-full font-bold hover:bg-purple-800/30 transition-colors inline-flex items-center gap-2">
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
});