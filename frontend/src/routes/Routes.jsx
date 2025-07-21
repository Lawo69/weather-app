import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from '../pages/Home';
import Login from '../pages/Login';

const AppRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Protected route */}
      <Route
        path="/"
        element={
          isAuthenticated ? <Home /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
