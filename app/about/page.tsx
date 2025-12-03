import { FaBook, FaUsers, FaHeart, FaTrophy } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Prabuddha Store</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in knowledge and communication since our establishment. 
            We are dedicated to providing quality books, educational materials, and communication tools.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card">
            <h2 className="text-3xl font-bold mb-4 text-primary-600">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To empower individuals and communities through accessible knowledge and effective communication tools. 
              We believe that education and information are fundamental rights, and we strive to make quality 
              learning materials available to everyone.
            </p>
          </div>

          <div className="card">
            <h2 className="text-3xl font-bold mb-4 text-primary-600">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become the leading destination for books and communication tools, known for our curated selection, 
              exceptional customer service, and commitment to fostering a culture of continuous learning and 
              intellectual growth in our community.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <FaBook className="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We carefully select every product to ensure the highest quality for our customers.
              </p>
            </div>

            <div className="text-center">
              <FaUsers className="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Building strong relationships with our customers and supporting local communities.
              </p>
            </div>

            <div className="text-center">
              <FaHeart className="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">
                We are passionate about books, learning, and helping others discover new knowledge.
              </p>
            </div>

            <div className="text-center">
              <FaTrophy className="text-5xl text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Committed to excellence in every aspect of our service and product offerings.
              </p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="card mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Prabuddha Store began with a simple vision: to create a space where knowledge seekers could find 
              everything they need to learn, grow, and communicate effectively. What started as a small bookshop 
              has grown into a comprehensive resource for books, educational materials, stationery, and 
              communication tools.
            </p>
            <p className="mb-4">
              Over the years, we've built strong relationships with publishers, authors, and educators to bring 
              you the best selection of materials across various categories. From classic literature to contemporary 
              non-fiction, from children's books to professional resources, we've curated our collection with care 
              and expertise.
            </p>
            <p>
              Today, we're proud to serve a diverse community of readers, students, professionals, and lifelong 
              learners. We continue to evolve and expand our offerings, always staying true to our core mission 
              of making quality educational resources accessible to all.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="card">
            <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
            <div className="text-gray-600">Books Available</div>
          </div>
          <div className="card">
            <div className="text-4xl font-bold text-primary-600 mb-2">5,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="card">
            <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div className="card">
            <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
}