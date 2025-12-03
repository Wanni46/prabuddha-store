'use client';

import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import products from '@/lib/products';
import { formatPrice, getCartTotal } from '@/lib/utils';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const cartItems = cart.map((item) => {
    const product = products.find((p) => p.id === parseInt(item.id));
    return { ...item, product };
  }).filter((item) => item.product);

  const total = getCartTotal(cart);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-gray-600 mb-8">Add some products to get started!</p>
            <Link href="/books" className="btn-primary inline-block">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item: any) => (
              <div key={item.id} className="card flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">📚</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.product.name}</h3>
                  <p className="text-gray-600 mb-2">{item.product.category}</p>
                  <p className="text-2xl font-bold text-primary-600">
                    {formatPrice(item.product.price)}
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(parseInt(item.id), item.quantity - 1)}
                      className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-colors"
                    >
                      <FaMinus />
                    </button>
                    <span className="text-xl font-semibold w-12 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(parseInt(item.id), item.quantity + 1)}
                      className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-colors"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(parseInt(item.id))}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <FaTrash className="text-xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary-600">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <Link href="/checkout" className="btn-primary w-full block text-center">
                Proceed to Checkout
              </Link>
              
              <Link href="/books" className="btn-secondary w-full block text-center mt-4">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}