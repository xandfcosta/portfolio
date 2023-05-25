import Image from 'next/image'
import { Mail, Linkedin, GithubIcon } from 'lucide-react'

/* eslint-disable react/no-unescaped-entities */
import ProjectsList from '@/components/ProjectsList'

export default function Home() {
  return (
    <>
      {/* Landing */}
      <section className="flex flex-col w-full justify-center h-screen items-center gap-4 md:gap-10">
        <h1 className="text-6xl md:text-8xl font-black text-center">
          Ale
          <span className="text-red-600">xand</span>
          re <br /> F. Costa
        </h1>
        <h2 className="text-md md:text-xl font-thin">
          Computer Science Student
        </h2>
        <div className="flex gap-4">
          <a href="mailto: fcosta.xand@gmail.com">
            <Mail size={40} strokeWidth={1} />
          </a>
          <a
            href="https://www.linkedin.com/in/xandfcosta/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={40} strokeWidth={1} />
          </a>
          <a
            href="https://github.com/xandfcosta"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon size={40} strokeWidth={1} />
          </a>
        </div>
      </section>

      {/* About me */}
      <section className="grid grid-cols-2 md:flex p-6 justify-center items-center gap-10">
        <div className="relative w-full aspect-square md:max-h-[300px] md:max-w-[300px]">
          <Image
            fill
            src="https://github.com/xandfcosta.png"
            alt="Xand's Avatar"
            sizes="(max-width: 768px) 100px, (max-width: 1200px) 300px"
            className="rounded-full"
          />
        </div>
        <article className="flex flex-col h-full gap-3 justify-center">
          <h1 className="text-2xl md:text-4xl font-black text-center text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-600">
            Hello! I'm Alexandre
          </h1>
          <p className="text-xs md:text-lg max-w-[500px] text-justify leading-relaxed font-light">
            Brazilian computer science student at the Federal Institute of the
            South of Minas Gerais. I'm person who is motivated by the unknow and
            challenges because that's what leads to evolution.
          </p>
        </article>
      </section>

      {/* Projects */}
      <section className="flex flex-col items-center p-6 mt-10">
        <h1 className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-600">
          Projects
        </h1>

        {/* @ts-expect-error Async Server Component */}
        <ProjectsList />
      </section>
    </>
  )
}
