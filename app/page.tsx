import Link from 'next/link';
import { FaBook, FaTruck, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import products from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const featuredProducts = products.filter((p: any) => p.id <= 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Prabuddha Store</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your trusted source for books, educational materials, stationery, and communication tools
          </p>
          <Link href="/books" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block">
            Browse Our Collection
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <FaBook className="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">Curated collection of books and materials</p>
            </div>
            <div className="text-center">
              <FaTruck className="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping</p>
            </div>
            <div className="text-center">
              <FaHeadset className="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help you</p>
            </div>
            <div className="text-center">
              <FaShieldAlt className="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Safe and encrypted transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/books" className="btn-primary inline-block">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {['Fiction', 'Non-Fiction', 'Educational', 'Stationery', 'Communication'].map((category) => (
              <Link
                key={category}
                href={`/books?category=${category}`}
                className="card text-center hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-primary-600">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8">Subscribe to our newsletter for latest updates and special offers</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}