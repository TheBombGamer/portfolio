import { ArrowRight, BookOpen, ShoppingBag } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to My Digital Space
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A creative developer sharing insights, stories, and handcrafted products with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('blog')}
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Read My Blog
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button
                onClick={() => onNavigate('store')}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Browse Store
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dive into articles about web development, design, and everything in between.
                Share in the journey of learning and creating.
              </p>
              <button
                onClick={() => onNavigate('blog')}
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Explore Articles
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <ShoppingBag className="text-green-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Store</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Discover unique digital products, templates, and resources carefully crafted
                to help you build better projects.
              </p>
              <button
                onClick={() => onNavigate('store')}
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                View Products
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're here for the articles or the products, I'm glad you stopped by.
            Feel free to explore and reach out if you'd like to collaborate.
          </p>
        </div>
      </section>
    </div>
  );
}
