// Registrar usuário
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.querySelector('.login-form');
  const loginForm = document.querySelector('.login-form');

  if (document.title === 'Registrar') {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = document.getElementById('log-usuario').value;
      const password = document.getElementById('log-senha').value;
      const confirmPassword = document.getElementById('log-confirmar-senha').value;

      if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
      }

      // Salvar no localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      alert('Usuário registrado com sucesso!');
      window.location.href = './index.html';
    });
  }

  // Fazer login
  if (document.title === 'Login') {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = document.getElementById('log-usuario').value;
      const password = document.getElementById('log-senha').value;

      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');

      if (username === storedUsername && password === storedPassword) {
        alert('Login bem-sucedido!');
        // Redirecionar para outra página ou realizar outra ação
      } else {
        alert('Usuário ou senha incorretos!');
      }
    });
  }
});