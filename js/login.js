document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login successful!');
        this.reset(); // Clear the form fields
    } else {
        alert('Please enter both email and password!');
    }
});
