import PageShell from '../components/layout/PageShell';
import StandardPageTemplate from '../components/StandardPageTemplate';
import siteContent from '../content/siteContent';

const ResearchStandardsPage = () => {
  const page = siteContent.pages['/governance/standards'];
  return (
    <PageShell>
      <StandardPageTemplate page={page} badge="Governance" />
    </PageShell>
  );
};

export default ResearchStandardsPage;
