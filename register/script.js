function registerUser(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Perform registration logic (for simplicity, storing in local storage)
    let user = {
        name: document.querySelector('input[type="text"]').value,
        email: document.querySelector('input[type="email"]').value,
        password: document.querySelector('input[type="password"]').value,
    };

    // Store user data (this is a simplified example, not suitable for production)
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Redirect to the homepage
    window.location.href = "../homepage/index.html";
}
