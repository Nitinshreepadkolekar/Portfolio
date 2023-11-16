document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.querySelector("#language-toggle");

    let currentLanguage = localStorage.getItem("preferredLanguage") || "en";

    function setLanguagePreference(language) {
        document.documentElement.lang = language;

        const elements = document.querySelectorAll("[data-en], [data-ja]");
        elements.forEach((element) => {
            const key = `data-${language}`;
            element.textContent = element.getAttribute(key);
        });

        localStorage.setItem("preferredLanguage", language);
    }

    setLanguagePreference(currentLanguage);

    languageToggle.addEventListener("click", function () {
        if (currentLanguage === "en") {
            currentLanguage = "ja";
        } else {
            currentLanguage = "en";
        }
        setLanguagePreference(currentLanguage);
    });
});
