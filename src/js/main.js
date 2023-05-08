// Import only the Bootstrap components we need
import { Popover, Tooltip} from "bootstrap";

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
  new Tooltip(tooltip);
});


// Sidebar Toggle
function toggleSidebar() {
  var app = document.getElementById("app");
  var toggleButton = document.getElementById("sidebar-toggle");

  var isOpen = app.classList.contains("sidebar-toggle");

  if (isOpen) {
    app.classList.remove("sidebar-toggle");
  } else {
    app.classList.add("sidebar-toggle");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("sidebar-toggle");
  toggleButton.addEventListener("click", toggleSidebar);
});