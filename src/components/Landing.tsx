import { Linkedin, GithubIcon, ChevronDown } from 'lucide-react'

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
    <section className="relative flex flex-col w-full justify-center h-screen items-center bg-gradient-to-r from-yellow-600 to-yellow-400 p-6 md:p-0">
      <div className="flex flex-col gap-0">
        <div className="flex justify-between items-end">
          <h1 className="font-bold text-zinc-900 text-sm md:text-xl opacity-70">
            Hi, I am Alexandre
          </h1>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex w-full">
            <h1 className="text-5xl md:text-8xl font-black uppercase text-zinc-900">
              Frontend
            </h1>
            <div className="flex h-full w-full justify-end">
              <a
                className="flex justify-center opacity-50 hover:opacity-100 hover:translate-y-[-10px] ease-out duration-75"
                href="https://www.linkedin.com/in/xandfcosta/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin
                  strokeWidth={0}
                  fill="#18181B"
                  className="h-full w-full"
                />
              </a>
              <a
                className="flex justify-center opacity-50 hover:opacity-100 hover:translate-y-[-10px] ease-out duration-75"
                href="https://github.com/xandfcosta"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon
                  strokeWidth={0}
                  fill="#18181B"
                  className="h-full w-full"
                />
              </a>
            </div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black uppercase text-zinc-900">
            Developer
          </h1>
        </div>
        <div className="w-full flex justify-end text-sm md:text-lg">
          <h1>I am a {age}-year-old Computer Science Student</h1>
        </div>
      </div>
      <div className="absolute bottom-0 w-full animate-bounce">
        <ChevronDown strokeWidth={1} className="w-full h-[100px]" />
      </div>
    </section>
  )
}
