import PageShell from '../components/layout/PageShell';
import SectionRenderer from '../components/SectionRenderer';
import siteContent from '../content/siteContent';

const ResearchStandardsPage = () => {
  const page = siteContent.pages['/governance/standards'];
  return (
    <PageShell>
      <SectionRenderer sections={page?.sections} />
    </PageShell>
  );
};

export default ResearchStandardsPage;
