function loginUser(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Perform your login logic here (validate user, check credentials, etc.)
    // For simplicity, let's assume the login is successful

    // Redirect to the homepage
    window.location.href = "../homepage/index.html";
}
