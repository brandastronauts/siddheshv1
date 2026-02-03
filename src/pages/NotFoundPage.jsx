import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import PageShell from '../components/layout/PageShell';

const NotFoundPage = () => {
  return (
    <PageShell>
      <section className="section-spacing min-h-[60vh] flex items-center">
        <div className="container-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="text-8xl font-bold text-primary-navy/20 mb-4">
              404
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-deep-ink mb-4">
              Page Not Found
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-navy text-white font-medium rounded-lg hover:bg-secondary-blue transition-all duration-200 hover:shadow-lg"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-border text-muted-foreground font-medium rounded-lg hover:border-primary-navy hover:text-primary-navy transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default NotFoundPage;
