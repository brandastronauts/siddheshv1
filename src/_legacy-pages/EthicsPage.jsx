import PageShell from '../components/layout/PageShell';
import StandardPageTemplate from '../components/StandardPageTemplate';
import NotFoundPage from './NotFoundPage';
import { getPage } from '../lib/getPage';

const EthicsPage = () => {
  const page = getPage('/governance/ethics');
  if (!page) return <NotFoundPage />;
  return (
    <PageShell>
      <StandardPageTemplate page={page} badge="Governance" />
    </PageShell>
  );
};

export default EthicsPage;
