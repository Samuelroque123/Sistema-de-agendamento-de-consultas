document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsername = 'admin';
    const validPassword = '1234';

    if (username === validUsername && password === validPassword) {
        localStorage.setItem('isAuthenticated', 'true');
        window.location.href = 'index.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Usuário ou senha incorretos!';
    }
});
