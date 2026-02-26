import PageShell from '../components/layout/PageShell';
import SectionRenderer from '../components/SectionRenderer';
import siteContent from '../content/siteContent';

const OurStandardsPage = () => {
  const page = siteContent.pages['/governance/our-standards'];
  return (
    <PageShell>
      <SectionRenderer sections={page?.sections} />
    </PageShell>
  );
};

export default OurStandardsPage;
