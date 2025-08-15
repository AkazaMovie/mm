const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", () => {
    // Toggle dark mode on body
    document.body.classList.toggle("dark-mode");

    // Toggle dark mode on button to change its color when in dark mode
    toggleButton.classList.toggle("dark-mode");
});
