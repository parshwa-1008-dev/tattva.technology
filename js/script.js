
/* =========================================
   TATTVA TECHNOLOGY
   Website functionality and contact setup
   ========================================= */

// STEP 1: Replace these placeholders with your details.
const COMPANY_EMAIL = "parshwap2009@gmail.com";

// Use your WhatsApp country code + number.
// India country code is 91. Enter digits only.
const WHATSAPP_NUMBER = "917498326316";

// STEP 2: Mobile navigation menu
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuButton.textContent = isOpen ? "×" : "☰";
  });

  // Close the menu after selecting a navigation link.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      menuButton.textContent = "☰";
    });
  });

  // Close the menu when switching back to desktop width.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      menuButton.textContent = "☰";
    }
  });
}

// STEP 3: Automatically update the copyright year.
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// STEP 4: Configure the email contact link.
const emailButton = document.getElementById("emailButton");

if (emailButton) {
  emailButton.href = `mailto:${COMPANY_EMAIL}`;
}

// STEP 5: Configure the WhatsApp contact link.
const whatsappLink = document.getElementById("whatsappLink");

if (whatsappLink) {
  const isConfigured =
    /^\d{10,15}$/.test(WHATSAPP_NUMBER) &&
    !WHATSAPP_NUMBER.includes("XXXXXXXXXX");

  if (isConfigured) {
    whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
  } else {
    whatsappLink.href = "#contact";
    whatsappLink.addEventListener("click", (event) => {
      event.preventDefault();
      alert(
        "Please add your WhatsApp number in js/script.js before using this contact link."
      );
    });
  }
}
