const translations = {
  pl: {
    title: "OpenNanoHeal",
    subtitle: "Technologia leczenia dla wszystkich istot żywych.",
    "mission-title": "🌱 Misja",
    "mission-text": "Budujemy otwartą platformę nanotechnologii regeneracyjnej...",
    "goals-title": "🎯 Nasze cele",
    "goals-list": [
      "Tworzenie otwartego sprzętu i oprogramowania...",
      "Zastosowanie AI do analizy...",
      "Współpraca z edukatorami..."
    ],
    "join-title": "🤝 Dołącz do nas",
    "join-text-1": "Znajdziesz nas na GitHub...",
    "join-text-2": "Razem możemy stworzyć coś większego...",
    "contact-title": "📬 Skontaktuj się z nami",
    "footer-text": "© 2025 OpenNanoHeal. Open Source. For Life.",
    "input-name": "Twoje imię",
    "input-email": "Twój e-mail",
    "input-message": "Wiadomość...",
    "form-submit": "Wyślij"
  },
  en: {
    title: "OpenNanoHeal",
    subtitle: "Healing technology for all living beings.",
    "mission-title": "🌱 Mission",
    "mission-text": "We are building an open regenerative nanotech platform...",
    "goals-title": "🎯 Our Goals",
    "goals-list": [
      "Develop open hardware and software for wound healing",
      "Use AI for diagnostics and regenerative support",
      "Collaborate with educators and aid groups"
    ],
    "join-title": "🤝 Join Us",
    "join-text-1": "Find us on GitHub...",
    "join-text-2": "Together we can build something greater...",
    "contact-title": "📬 Contact Us",
    "footer-text": "© 2025 OpenNanoHeal. Open Source. For Life.",
    "input-name": "Your name",
    "input-email": "Your e-mail",
    "input-message": "Message...",
    "form-submit": "Send"
  }
};

function switchLang(lang) {
  for (let key in translations[lang]) {
    const el = document.getElementById(key);
    if (el) {
      if (Array.isArray(translations[lang][key]) && el.tagName === "UL") {
        el.innerHTML = translations[lang][key].map(i => "<li>" + i + "</li>").join("");
      } else if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[lang][key];
      } else if (el.tagName === "BUTTON") {
        el.innerText = translations[lang][key];
      } else {
        el.innerText = translations[lang][key];
      }
    }
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

window.onload = () => {
  const userLang = navigator.language.startsWith("en") ? "en" : "pl";
  switchLang(userLang);
};
