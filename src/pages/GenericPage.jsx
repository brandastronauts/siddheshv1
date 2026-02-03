import { useLocation } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import SectionRenderer from '../components/SectionRenderer';
import siteContent from '../content/siteContent';

const GenericPage = () => {
  const location = useLocation();
  const page = siteContent.pages[location.pathname];
  
  if (!page) {
    return (
      <PageShell>
        <div className="container-grid py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground">The requested page does not exist.</p>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <SectionRenderer sections={page?.sections} />
    </PageShell>
  );
};

export default GenericPage;
