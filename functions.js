// ------------------------------
// Navigation functions
// ------------------------------
function openResume() {
  window.location.href = "resume.html"; 
}

function openProjects() {
  window.location.href = "projects.html";
}


function openHome() {
  window.location.href = "index.html";
}

// ------------------------------
// Dropdown toggle
// ------------------------------
function toggleDropdown(id) {
  document.querySelectorAll(".dropdown-content").forEach(menu => {
    if (menu.id === id) {
      menu.classList.toggle("show"); // toggle clicked menu
    } else {
      menu.classList.remove("show"); // close others
    }
  });
}

// Close dropdown if clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.hamburger') && !event.target.closest('.hamburger')) {
    document.querySelectorAll(".dropdown-content").forEach(menu => {
      menu.classList.remove("show");
    });
  }
}
