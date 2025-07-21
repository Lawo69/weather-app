import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '/Logo.png';

const Login = () => {
  const { loginWithRedirect, error } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div className="bg-no-repeat bg-cover bg-center min-h-screen flex flex-col items-center justify-center px-4 bg-[url(/assets/img/Headerbg.png)]">
      <header className="flex flex-col items-center justify-center mb-10 text-center">
        <img src={Logo} alt="logo" className="w-16 sm:w-20 mb-4" />
        <h1 className="text-2xl sm:text-3xl text-white font-bold drop-shadow-lg">Weather App</h1>
      </header>

      {error && (
        <p className="text-red-500 mb-4 text-sm text-center max-w-xs">
          {error.message}
        </p>
      )}

      <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 cursor-pointer rounded-lg shadow-md transition duration-300"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
