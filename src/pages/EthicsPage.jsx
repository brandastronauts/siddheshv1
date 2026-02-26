import PageShell from '../components/layout/PageShell';
import SectionRenderer from '../components/SectionRenderer';
import siteContent from '../content/siteContent';

const EthicsPage = () => {
  const page = siteContent.pages['/governance/ethics'];
  return (
    <PageShell>
      <SectionRenderer sections={page?.sections} />
    </PageShell>
  );
};

export default EthicsPage;
