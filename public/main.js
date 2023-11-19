const sections = document.querySelectorAll('section');
sections.forEach(section => section.classList.add('show'));


document.getElementById("contact-button").addEventListener("click", function () {
    var email = "nitinskolekar@email.com";
    var subject = "Regarding your portfolio";
    var body = "Any Queries ?";

    var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    window.location.href = mailtoLink;
});

document.querySelector("#language-toggle").addEventListener("click", function () {
    const currentLanguage = document.documentElement.lang === "en" ? "ja" : "en";

    fetch(`/toggle-language?lang=${currentLanguage}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                location.reload();
            }
        });
});
