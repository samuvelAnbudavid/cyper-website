import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
  return typeof window !== 'undefined' && localStorage.getItem('cybereyeintelitech-admin') === 'true';
};

export function ProtectedAdminRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
