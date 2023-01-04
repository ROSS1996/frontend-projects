const projects = [
    { name: 'QR Code', folder: 'qrcode' },
    { name: 'Profile Card Component', folder: 'pccomp-nb' },
    { name: 'Product Preview Card', folder: 'ppcc-nb' },
    { name: 'Interactive card details', folder: 'icdf-junior' },
]

for (project of projects) {
    const main = document.getElementById('projectsList')

    let screenshot = document.createElement('img');
    screenshot.classList.add('screenshot')
    screenshot.src = "./screenshots/" + `${project.folder}` + ".jpeg"
    screenshot.alt = project.name

    let projectName = document.createElement('h2')
    projectName.innerText = project.name

    let links = document.createElement('div')
    links.classList.add('links')

    let github = document.createElement('p')
    github.innerText = 'Code'
    github.classList.add('borderR')
    let githubLink = document.createElement('a')
    githubLink.href = 'https://github.com/ROSS1996/frontend-projects/tree/main/' + `${project.folder}`
    githubLink.target = '_blank'

    let live = document.createElement('p')
    live.innerText = 'Preview'
    let liveLink = document.createElement('a')
    liveLink.href = 'https://ross1996.github.io/frontend-projects/' + `${project.folder}`
    liveLink.target = '_blank'

    let div = document.createElement('div')
    div.classList.add('project')

        liveLink.appendChild(live)
    githubLink.appendChild(github)
    links.appendChild(githubLink)
    links.appendChild(liveLink)
    div.appendChild(screenshot)
    div.appendChild(projectName)
    div.appendChild(links)
    main.appendChild(div)
}