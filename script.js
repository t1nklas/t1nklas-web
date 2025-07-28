const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }
});

    const messages = [
        "boo!",
        "testing 123",
        "achoo",
        "ehehehe",
        "/home/t1nklas",
        "made with love",
        "<R3",
        "i love root",
        "sleepy-web",
        "refresh and see a different footer",
        "ermmmmmm",
        "pneumonoultramicroscopicsilicovolcanoconiosis",
        "t1nklas was here!",
        "check out ari.lt aswell!",
        "meow",
        "sleeping rn",
        "idk this is so random",
        "what now",
        "leave me alone",
        "=^..^=",
        "guys please."
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    document.querySelector(".dynamic-footer").textContent = messages[randomIndex];