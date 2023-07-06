import ProjectsList from '@/components/ProjectsList'

export default function Projects() {
  return (
    <section className="flex flex-col items-center p-6 mt-10">
      <h1 className="text-2xl md:text-4xl font-black text-transparent text-zinc-900 uppercase">
        Projects
      </h1>

      {/* @ts-expect-error Async Server Component */}
      <ProjectsList />
    </section>
  )
}
