import PageShell from '../components/layout/PageShell';
import SectionRenderer from '../components/SectionRenderer';
import NotFoundPage from './NotFoundPage';
import { getPage } from '../lib/getPage';

const CollaboratePage = () => {
  const page = getPage('/collaborate');
  if (!page) return <NotFoundPage />;

  return (
    <PageShell>
      <SectionRenderer sections={page?.sections} />
    </PageShell>
  );
};

export default CollaboratePage;
