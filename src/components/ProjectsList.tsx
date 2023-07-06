import axios from 'axios'

import Image from 'next/image'

interface GitProjects {
  name: string
  desc: string
  url: string
  createDate: string
  lang: string
}

interface ResponseProjects {
  name: string
  description: string
  html_url: string
  created_at: string
  language: string
}

export default async function ProjectsList() {
  const projects: GitProjects[] = []
  const languages: string[] = []

  await axios
    .get('https://api.github.com/users/xandfcosta/repos')
    .then((response) => {
      response.data.forEach((gitProjectJson: ResponseProjects) => {
        if (gitProjectJson.name === 'xandfcosta') return

        const newProject = {
          name: gitProjectJson.name,
          desc: gitProjectJson.description,
          url: gitProjectJson.html_url,
          createDate: gitProjectJson.created_at,
          lang: gitProjectJson.language,
        }

        projects.push(newProject)

        if (!languages.includes(newProject.lang) && newProject.lang !== null) {
          languages.push(newProject.lang)
        }
      })
    })
    .catch((err) => {
      console.log(err)
    })

  if (projects.length === 0) {
    return (
      <h1 className="text-bold text-zinc-500 mt-6 text-sm md:text-lg">
        Erro ao carregar os projetos, recarregue a página por favor
      </h1>
    )
  }

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-2 w-[90%] md:w-[70%] mt-6">
      {projects.map((project, index) => {
        let cssName = null

        if (project.lang === 'Python') {
          cssName = 'python'
        } else if (project.lang === 'C' || project.lang === 'C++') {
          cssName = 'cplusplus'
        } else if (project.lang === 'TypeScript') {
          cssName = 'typescript'
        } else if (project.lang === 'JavaScript') {
          cssName = 'javascript'
        } else if (project.lang === 'Java') {
          cssName = 'java'
        } else if (project.lang === 'C#') {
          cssName = 'csharp'
        } else if (project.lang === 'CSS') {
          cssName = 'css3'
        } else if (project.lang === 'CSS') {
          cssName = 'css'
        }

        const imgLink = cssName
          ? `https://raw.githubusercontent.com/devicons/devicon/master/icons/${cssName}/${cssName}-original.svg`
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNXEqOh0l1LxaTxwsXUV1bK1ciPwCpi0r3g&usqp=CAU'

        return (
          <a
            key={`${index}_${project.name}`}
            href={project.url}
            target="_blank"
            className="flex justify-between relative shadow-md rounded-lg p-6 h-[100px]"
            rel="noreferrer"
          >
            <div className="absolute top-[50%] translate-y-[-50%] left-2 w-1 h-[80%] rounded-full bg-gradient-to-b from-yellow-400 to-yellow-700"></div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-ellipsis whitespace-nowrap">
                {project.name}
              </h1>
              <p className="text-xs md:text-sm text-zinc-400">{project.lang}</p>
            </div>
            <div className="relative h-full aspect-square md:max-h-[300px] md:max-w-[300px]">
              <Image
                fill
                src={imgLink}
                alt={`${cssName ? project.lang : 'generic'} logo`}
                sizes="(max-width: 768px) 50px, (max-width: 1200px) 300px"
                className=" h-full w-auto"
              />
            </div>
          </a>
        )
      })}
    </div>
  )
}
