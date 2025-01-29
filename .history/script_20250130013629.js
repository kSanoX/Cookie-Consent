// Функция проверки согласия на использование cookies
function checkCookieConsent() {
  return localStorage.getItem("cookieConsent") === "true";
}

// Функция отображения pop-up
function showCookiePopup() {
  document.getElementById("cookie-popup").style.display = "flex";
}

// Функция принятия cookies
function acceptCookies() {
  localStorage.setItem("cookieConsent", "true");
  document.getElementById("cookie-popup").style.display = "none";
}

// Функция отказа от cookies
function declineCookies() {
  localStorage.setItem("cookieConsent", "false");
  document.getElementById("cookie-popup").style.display = "none";
}

// Дождаться загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("accept-cookies").addEventListener("click", acceptCookies);
  document.getElementById("decline-cookies").addEventListener("click", declineCookies);

  // Проверка, был ли дан ответ по cookies
  if (!checkCookieConsent()) {
      showCookiePopup();
  }
});
