import { Navigate } from 'react-router-dom';

export const BusinessRedirectPage = () => {
  // const { businessId } = useParams();

  // TODO (savtsynov) заменить, когда будет готово апи
  const businessId = 1;

  if (!businessId) return <Navigate to="/auth" replace />;

  return <Navigate to={`/business/${businessId}/dashboard`} replace />;
};
