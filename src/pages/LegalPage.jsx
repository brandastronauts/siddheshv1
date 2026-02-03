import { useLocation } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';

const LegalPage = () => {
  const location = useLocation();
  const path = location.pathname;
  
  return <PageShell path={path} />;
};

export default LegalPage;
