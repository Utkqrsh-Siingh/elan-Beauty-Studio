const config = window.SALON_CONFIG || {};
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("[data-address]").textContent = config.address || "Add salon address";
document.querySelector("[data-hours]").textContent = config.openingHours || "Contact us for opening hours";
document.querySelector("[data-phone]").textContent = config.phoneDisplay || "Add salon phone number";
document.querySelector("[data-instagram]").href = config.instagramUrl || "#";
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#booking-form")?.addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name").trim();
  const phone = form.get("phone").trim();
  const service = form.get("service");
  const message = form.get("message").trim();

  if (!config.whatsappNumber || config.whatsappNumber === "919999999999") {
    alert("This is a demo website. Add the salon's real WhatsApp number in config.js before using appointment enquiries.");
    return;
  }

  const text = [
    `Hello ${config.name || "there"}! I'd like to request an appointment.`,
    `Name: ${name}`,
    `My phone: ${phone}`,
    `Interested in: ${service}`,
    message ? `Note: ${message}` : ""
  ].filter(Boolean).join("\n");

  window.open(`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
});
