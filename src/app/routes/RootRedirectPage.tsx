import { Navigate } from 'react-router-dom';

export const RootRedirectPage = () => {
  // TODO получаем данные пользователя из AuthProvider
  const role = 'business';
  const businessId = 1;

  if (role === 'business') {
    return <Navigate to={`/business/${businessId}`} replace />;
  }

  if (role === 'employee') {
    return <Navigate to="/employee" replace />;
  }

  if (role === 'client') {
    return <Navigate to="/client" replace />;
  }

  return <Navigate to="/auth" replace />;
};
