const html = document.querySelector('html')
let switcher = document.getElementById('switchStatus')
switcher.addEventListener('change', () => {
    html.classList.toggle('dark-mode')
    console.log(':)')
})
