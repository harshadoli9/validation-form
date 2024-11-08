// Function to validate the entire form
function validateForm() {
    let isValid = true;

    // Get values from the users
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Clear all error messages
    clearErrors();

    // Validate Full Name and check for the required condition
    if (fullName.length < 5) {
        document.getElementById("nameError").innerText = "Name must be at least 5 characters long.";
        isValid = false;
    }

    // Validate Email and check for the required condition
    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Enter a valid email address.";
        isValid = false;
    }

    // Validate Phone Number and check for the rquired conditions
    if (phone.length !== 10 || phone === "123456789" || isNaN(phone)) {
        document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Validate Password and check for the required condition
    if (password.toLowerCase() === "password" || password.length < 8 || password === fullName) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters and not a common word or your name.";
        isValid = false;
    }

    // Validate Confirm Password and check for the conditions
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").innerText = "Confirm Password must match with your password.";
        isValid = false;
    }

    return isValid; // If any validation fails, isValid will be false
}

function clearErrors() {
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
}

// Event listeners for real-time validation
document.getElementById("fullName").addEventListener("input", validateForm);
document.getElementById("email").addEventListener("input", validateForm);
document.getElementById("phone").addEventListener("input", validateForm);
document.getElementById("password").addEventListener("input", validateForm);
document.getElementById("confirmPassword").addEventListener("input", validateForm);