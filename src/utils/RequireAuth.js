import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Loadable from '../components/Loadable';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const {
    auth: { isLoggedIn, loading },
  } = useSelector((state) => state || {});

  if (loading) {
    return <Loadable>{children}</Loadable>;
  }
  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />;
  }
  return children;
};

export default RequireAuth;
