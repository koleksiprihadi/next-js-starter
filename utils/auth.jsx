import { useEffect } from 'react';
function AuthPage(router) {
    useEffect(() => {
      // Cek apakah pengguna memiliki token, jika tidak, redirect ke halaman login
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      }
    }, []);
  }

export default AuthPage