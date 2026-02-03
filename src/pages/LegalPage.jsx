import { useParams } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';

const LegalPage = () => {
  const { slug } = useParams();
  const path = `/${slug}`;
  
  return <PageShell path={path} />;
};

export default LegalPage;
