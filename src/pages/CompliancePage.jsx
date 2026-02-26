import PageShell from '../components/layout/PageShell';
import StandardPageTemplate from '../components/StandardPageTemplate';
import siteContent from '../content/siteContent';

const CompliancePage = () => {
  const page = siteContent.pages['/governance/compliance'];
  return (
    <PageShell>
      <StandardPageTemplate page={page} badge="Governance" />
    </PageShell>
  );
};

export default CompliancePage;
