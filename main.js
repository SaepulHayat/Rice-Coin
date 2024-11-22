// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

// Function to toggle dark mode
darkModeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark"); // Tailwind dark mode class

    // Toggle icons
    sunIcon.classList.toggle("hidden");
    moonIcon.classList.toggle("hidden");
});

// Hamburger Menu Toggle
const hamburgerButton = document.getElementById("hamburgerButton");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

// Function to open sidebar
hamburgerButton.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full");
});

// Function to close sidebar
closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
});

// Optional: Close sidebar when clicking outside (for better UX)
document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !hamburgerButton.contains(event.target)) {
        sidebar.classList.add("-translate-x-full");
    }
});
