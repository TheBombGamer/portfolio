import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Store } from './pages/Store';
import { ProductPage } from './pages/ProductPage';

type Page = 'home' | 'blog' | 'blog-post' | 'store' | 'product';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedSlug, setSelectedSlug] = useState<string>('');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewBlogPost = (slug: string) => {
    setSelectedSlug(slug);
    setCurrentPage('blog-post');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProduct = (slug: string) => {
    setSelectedSlug(slug);
    setCurrentPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'blog':
        return <Blog onViewPost={handleViewBlogPost} />;
      case 'blog-post':
        return <BlogPost slug={selectedSlug} onBack={() => handleNavigate('blog')} />;
      case 'store':
        return <Store onViewProduct={handleViewProduct} />;
      case 'product':
        return <ProductPage slug={selectedSlug} onBack={() => handleNavigate('store')} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
