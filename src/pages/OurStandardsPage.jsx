import PageShell from '../components/layout/PageShell';
import StandardPageTemplate from '../components/StandardPageTemplate';
import siteContent from '../content/siteContent';

const OurStandardsPage = () => {
  const page = siteContent.pages['/governance/our-standards'];
  return (
    <PageShell>
      <StandardPageTemplate page={page} badge="Governance" />
    </PageShell>
  );
};

export default OurStandardsPage;
