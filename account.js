document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const profileForm = document.getElementById('profileForm');
    const profileNameInput = document.getElementById('profileName');
    const profileEmailInput = document.getElementById('profileEmail');
    const saveProfileButton = document.getElementById('saveProfileButton');

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        // Example login logic (replace with actual authentication)
        alert(`Logging in with Email: ${email} and Password: ${password}`);
    });

    // Handle register form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        // Example registration logic (replace with actual registration)
        alert(`Registering with Name: ${name}, Email: ${email} and Password: ${password}`);
    });

    // Handle profile edit
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Example profile update logic
        alert(`Profile updated with Name: ${profileNameInput.value} and Email: ${profileEmailInput.value}`);
    });

    window.editProfile = () => {
        profileNameInput.disabled = false;
        profileEmailInput.disabled = false;
        saveProfileButton.style.display = 'block';
    };
});
