import PageShell from '../components/layout/PageShell';
import StandardPageTemplate from '../components/StandardPageTemplate';
import NotFoundPage from './NotFoundPage';
import { getPage } from '../lib/getPage';

const InnovationPage = () => {
  const page = getPage('/methodology/innovation');
  if (!page) return <NotFoundPage />;
  return (
    <PageShell>
      <StandardPageTemplate page={page} badge="Methodology" />
    </PageShell>
  );
};

export default InnovationPage;
