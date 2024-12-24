document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        alert('Signup successful!');
        this.reset(); // Reset the form fields
    } else {
        alert('Please fill in all fields!');
    }
});
