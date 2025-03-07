// File: src/components/ProductCard.tsx
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { ShoppingCartIcon, HeartIcon, StarIcon } from './icons';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  isNew?: boolean;
  isSale?: boolean;
}

export const ProductCard = component$(({ product }: { product: Product }) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div class="bg-white rounded-lg shadow overflow-hidden group">
      <div class="relative">
        <Link href={`/product/${product.id}`} class="block">
          <img 
            src={product.image} 
            alt={product.name} 
            class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        {/* Badges */}
        <div class="absolute top-2 left-2 flex flex-col gap-2">
          {product.badge && (
            <span class="bg-emerald-600 text-white text-xs font-medium px-2 py-1 rounded">
              {product.badge}
            </span>
          )}
          {product.isNew && (
            <span class="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
              New
            </span>
          )}
          {product.isSale && (
            <span class="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
              {discount}% Off
            </span>
          )}
        </div>
        
        {/* Quick actions */}
        <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div class="flex space-x-2">
            <button 
              class="bg-white p-2 rounded-full hover:bg-emerald-600 hover:text-white transition-colors duration-150"
              aria-label="Add to cart"
            >
              <ShoppingCartIcon class="w-5 h-5" />
            </button>
            <button 
              class="bg-white p-2 rounded-full hover:bg-emerald-600 hover:text-white transition-colors duration-150"
              aria-label="Add to wishlist"
            >
              <HeartIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div class="p-4">
        <Link href={`/product/${product.id}`} class="block">
          <h3 class="text-lg font-medium text-gray-900 mb-1 hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {/* Price */}
        <div class="flex items-center mb-2">
          <span class="text-emerald-600 font-bold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span class="text-gray-400 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        {/* Ratings */}
        <div class="flex items-center">
          <div class="flex text-emerald-500">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} class="w-4 h-4" filled={i < product.rating} />
            ))}
          </div>
          <span class="text-gray-500 text-sm ml-1">({product.reviewCount})</span>
        </div>
        
        {/* Add to cart button */}
        <div class="mt-4">
          <button class="w-full bg-gray-100 hover:bg-emerald-600 hover:text-white text-gray-900 font-medium py-2 rounded transition-colors duration-150">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
});