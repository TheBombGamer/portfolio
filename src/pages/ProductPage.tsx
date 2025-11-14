import { useEffect, useState } from 'react';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { supabase, type Product } from '../lib/supabase';

interface ProductPageProps {
  slug: string;
  onBack: () => void;
}

export function ProductPage({ slug, onBack }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('slug', slug)
        .eq('available', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching product:', error);
      } else {
        setProduct(data);
      }
      setLoading(false);
    }

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button
            onClick={onBack}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Back to Store
          </button>
        </div>
      </div>
    );
  }

  const features = [
    'Lifetime access and updates',
    'Complete source code',
    'Documentation included',
    'Commercial use license',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Store
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {product.image && (
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-green-600">
                  ${product.price}
                </span>
                <span className="text-gray-600 ml-2">one-time payment</span>
              </div>

              <ul className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check size={20} className="text-green-600 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-green-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center">
                <ShoppingCart size={20} className="mr-2" />
                Purchase Now
              </button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Secure Payment:</strong> All transactions are encrypted and secure.
                Instant access after purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
