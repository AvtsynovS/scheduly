import { type PropsWithChildren, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Spin } from '@shared';

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  // TODO получаем данные пользователя из AuthProvider (храним в app/providers/AuthProvider)
  // TODO в AuthProvider будет запрос для получения авторизованного пользователя
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsAuth(true);
    }, 3000);
  }, []);

  if (isLoading) return <Spin />;
  if (!isAuth) return <Navigate to="/auth" replace />;

  return children;
};
