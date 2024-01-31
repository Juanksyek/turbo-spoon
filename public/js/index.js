//Menu script
function toggleMenu() {
  var nav = document.getElementsByTagName("nav")[0];
  if (nav.classList.contains("menu_active")) {
    nav.classList.remove("menu_active");
  } else {
    nav.classList.add("menu_active");
  }
}

function closeMenu() {
  var nav = document.getElementsByTagName("nav")[0];
  nav.classList.remove("menu_active");
}
