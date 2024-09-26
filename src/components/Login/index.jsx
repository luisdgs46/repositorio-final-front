import { useEffect, useContext } from 'react';
import { AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';
import UserContext from '../../contexts/users/UserContext';
import { useNavigate } from 'react-router-dom';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

const signIn = async (provider, formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const correctEmail = 'tu_email@example.com';
      const correctPassword = 'tu_contraseña';
      if (formData.get('email') === correctEmail && formData.get('password') === correctPassword) {
        alert('Ingreso exitoso.');
        resolve({ success: true });
      } else {
        alert('Credenciales incorrectas.');
        reject({ success: false });
      }
    }, 300);
  });
};

export default function Login(props) {
  const theme = useTheme();
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);

  const {
    loginUser,
    authStatus,
    verifyingToken
  } = userCtx;

  useEffect(() => {
    verifyingToken();

    if (authStatus) {
      navigate('/perfil');
    }
  }, [authStatus, navigate]);

  if (authStatus) return null;

  const handleSignIn = async (provider, formData) => {
    try {
      const result = await signIn(provider, formData);
      if (result.success) {

        loginUser({ email: formData.get('email'), password: formData.get('password') });
      }
    } catch (error) {
      console.error('Error de autenticación', error);
    }
  };

  return (
    <AppProvider theme={theme}>
      <div>
        <SignInPage signIn={handleSignIn} providers={providers} />
      </div>
    </AppProvider>
  );
}
