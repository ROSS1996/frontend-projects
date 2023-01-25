const projects = [
    { name: 'Profile Card Component', techs: ['HTML', 'CSS'], folder: 'pccomp-nb' },
    { name: 'Product Preview Card', techs: ['HTML', 'CSS'], folder: 'ppcc-nb' },
    { name: 'Interactive card details', techs: ['HTML', 'CSS', 'Javascript'], folder: 'icdf-junior' },
    { name: 'Social Media Dashboard with Themes', techs: ['HTML', 'CSS', 'Javascript'], folder: 'smdt-junior' },
    { name: 'IP Address Tracker', techs: ['HTML', 'CSS', 'Javascript'], folder: 'iptrack-int' },
    { name: 'Job listings with filter', techs: ['HTML', 'CSS', 'Javascript', 'React', 'Tailwind', 'Vite'], folder: 'joblist-int' },
]

for (project of projects) {
    const main = document.getElementById('projectsList')

    let screenshot = document.createElement('img');
    screenshot.classList.add('screenshot')
    screenshot.src = "./screenshots/" + `${project.folder}` + ".jpeg"
    screenshot.alt = project.name

    let projectName = document.createElement('h2')
    projectName.innerText = project.name




    let techsList = document.createElement('ul')

    project.techs.forEach(tech => {
        let li = document.createElement('li')
        li.innerText = tech
        techsList.appendChild(li)
    })

    let techs = document.createElement('div')
    techs.classList.add('techs')

    let techsTitle = document.createElement('h3')
    techsTitle.innerText = 'Techs'

    techs.appendChild(techsTitle)
    techs.appendChild(techsList)


    let links = document.createElement('div')
    links.classList.add('links')

    let github = document.createElement('p')
    github.innerText = 'Code'
    let githubLink = document.createElement('a')
    githubLink.href = 'https://github.com/ROSS1996/frontend-projects/tree/main/' + `${project.folder}`
    githubLink.target = '_blank'

    let live = document.createElement('p')
    live.innerText = 'Preview'
    let liveLink = document.createElement('a')
    if (project.techs.includes('Vite')) {
        liveLink.href = 'https://ross1996.github.io/frontend-projects/' + `${project.folder}` + '/dist/'
    } else {
        liveLink.href = 'https://ross1996.github.io/frontend-projects/' + `${project.folder}`
    }

    liveLink.target = '_blank'

    let infos = document.createElement('div')
    infos.classList.add('infos')

    liveLink.appendChild(live)
    githubLink.appendChild(github)
    infos.appendChild(projectName)
    infos.appendChild(techs)
    infos.appendChild(githubLink)
    infos.appendChild(liveLink)


    let div = document.createElement('div')
    div.classList.add('project')


    div.appendChild(screenshot)
    div.appendChild(infos)


    main.appendChild(div)
}