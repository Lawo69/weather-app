import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useAuth0 } from '@auth0/auth0-react';
import AppRoutes from './routes/Routes';

function App() {
  const toastStyle = { fontSize: '0.8rem' };

  const { error } = useAuth0();

  return (
    <>
      {error && <p className="text-red-500 text-center mt-4">{error.message}</p>}
      <ToastContainer style={toastStyle} />
      <AppRoutes />
    </>
  );
}

export default App;
