import { useLocation } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import SectionRenderer from '../components/SectionRenderer';
import siteContent from '../content/siteContent';

const LegalPage = () => {
  const location = useLocation();
  const page = siteContent.pages[location.pathname];
  
  return (
    <PageShell>
      <SectionRenderer sections={page?.sections} />
    </PageShell>
  );
};

export default LegalPage;
