'use client';

import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import { formatPrice } from '@/lib/utils';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  return (
    <div className="card group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
        <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
          <span className="text-4xl text-primary-600">📚</span>
        </div>
      </div>
      
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <span className="text-2xl font-bold text-primary-600">
          {formatPrice(product.price)}
        </span>
        <button
          onClick={handleAddToCart}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}