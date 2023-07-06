import { Linkedin, GithubIcon } from 'lucide-react'

export default function Landing() {
  const birthDate = new Date('2002/12/19')
  const todayDate = new Date()
  let age = 0

  const years = todayDate.getFullYear() - birthDate.getFullYear()
  age =
    todayDate.getMonth() <= birthDate.getMonth() &&
    todayDate.getDate() <= birthDate.getDate()
      ? years - 1
      : years

  return (
    <section className="flex flex-col w-full justify-center h-screen items-center bg-gradient-to-r from-yellow-600 to-yellow-400 p-6 md:p-0">
      <div className="flex flex-col gap-0">
        <div className="flex justify-between items-end">
          <h1 className="font-bold text-zinc-900 text-sm md:text-xl opacity-70">
            Hi, I am Alexandre
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-6xl md:text-9xl font-black uppercase text-zinc-900">
            React
          </h1>
          <div className="flex flex-1 justify-evenly items-center h-full">
            <a
              className="flex-1 flex justify-center opacity-50 hover:opacity-100 hover:translate-y-[-10px] ease-out duration-75"
              href="https://www.linkedin.com/in/xandfcosta/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin
                strokeWidth={0}
                fill="#18181B"
                className="h-full w-[50%]"
              />
            </a>
            <a
              className="flex-1 flex justify-center opacity-50 hover:opacity-100 hover:translate-y-[-10px] ease-out duration-75"
              href="https://github.com/xandfcosta"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon
                strokeWidth={0}
                fill="#18181B"
                className="h-full w-[50%]"
              />
            </a>
          </div>
        </div>
        <h1 className="text-6xl md:text-9xl font-black uppercase text-zinc-900">
          Developer
        </h1>
        <div className="w-full flex justify-end text-sm md:text-lg">
          <h1>I am a {age}-year-old Computer Sciencie Student</h1>
        </div>
      </div>
    </section>
  )
}
