// Check on 
function checkCookieConsent() {
  return localStorage.getItem("cookieConsent") === "true";
}

// Shop pop-up
function showCookiePopup() {
  document.getElementById("cookie-popup").style.display = "flex";
}

// Accept cookie
function acceptCookies() {
  localStorage.setItem("cookieConsent", "true");
  document.getElementById("cookie-popup").style.display = "none";
}

// Decline cookie
function declineCookies() {
  localStorage.setItem("cookieConsent", "false");
  document.getElementById("cookie-popup").style.display = "none";
}

// DOM load
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("accept-cookies").addEventListener("click", acceptCookies);
  document.getElementById("decline-cookies").addEventListener("click", declineCookies);

  // Попап показывается ТОЛЬКО если значение отсутствует (null)
  if (localStorage.getItem("cookieConsent") === null) {
      showCookiePopup();
  }
});

