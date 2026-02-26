import PageShell from '../components/layout/PageShell';
import StandardPageTemplate from '../components/StandardPageTemplate';
import siteContent from '../content/siteContent';

const InnovationPage = () => {
  const page = siteContent.pages['/methodology/innovation'];
  return (
    <PageShell>
      <StandardPageTemplate page={page} badge="Methodology" />
    </PageShell>
  );
};

export default InnovationPage;
