const html = document.querySelector('html')
let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let savedMode = localStorage.getItem("colorScheme");
let switcher = document.getElementById('switchStatus')

if (prefersDark && savedMode !== 'light') {
    html.classList.toggle('dark-mode')
    switcher.checked = !switcher.checked
    localStorage.setItem("colorScheme", "dark")
}

switcher.addEventListener('change', () => {
    html.classList.toggle('dark-mode')
    let mode = localStorage.getItem("colorScheme");
    if (mode === 'light' || mode === null) { localStorage.setItem("colorScheme", "dark")}
    else if (mode === 'dark' || mode === null) { localStorage.setItem("colorScheme", "light");}
})

