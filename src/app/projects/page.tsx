import ProjectsCard from '@/components/projects/projectCard';
import { PROJECT_LIST } from '@/data/project';

export default function ProjectListPage() {
  return (
    <main className='pb-32 md:py-18'>
      <h1 className='md:hidden w-full px-1 py-2 mt-9 mb-5 text-xl font-bold'>Projects</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6'>
        {PROJECT_LIST.map((project) => (
          <ProjectsCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </main>
  );
}
