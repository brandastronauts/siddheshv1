import { useLocation } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import StandardPageTemplate from '../components/StandardPageTemplate';
import NotFoundPage from './NotFoundPage';
import { getPage } from '../lib/getPage';

const LegalPage = () => {
  const location = useLocation();
  const page = getPage(location.pathname);
  if (!page) return <NotFoundPage />;

  return (
    <PageShell>
      <StandardPageTemplate page={page} badge="Legal" />
    </PageShell>
  );
};

export default LegalPage;
