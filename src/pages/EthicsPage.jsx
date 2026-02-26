import PageShell from '../components/layout/PageShell';
import StandardPageTemplate from '../components/StandardPageTemplate';
import siteContent from '../content/siteContent';

const EthicsPage = () => {
  const page = siteContent.pages['/governance/ethics'];
  return (
    <PageShell>
      <StandardPageTemplate page={page} badge="Governance" />
    </PageShell>
  );
};

export default EthicsPage;
