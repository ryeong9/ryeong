import LinkButton from '@/components/common/LinkButton';
import Markdown from '@/components/common/Markdown';
import ResponsibilityItem from '@/components/projects/responsibilityItem';
import { PROJECT_DETAIL } from '@/data/projectDetail';
import { RxNotionLogo } from 'react-icons/rx';

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = PROJECT_DETAIL.find((project) => project.id === id);

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <main className='pb-32 md:py-18'>
      <div className='md:border md:border-border md:rounded-2xl md:p-9'>
        <section className='pb-5 border-b border-border md:px-3 md:pt-4 md:pb-10 flex flex-col'>
          <div className='flex justify-between mt-9 md:mt-0 mb-5'>
            <h1 className='px-1 py-2 text-xl md:text-2xl font-bold'>{project.title}</h1>
            <LinkButton
              href={project.notionUrl}
              variant='notion'
              icon={<RxNotionLogo className='size-3 md:size-5' />}
            >
              Notion
            </LinkButton>
          </div>
          <Markdown className='font-medium text-sm md:text-xl mb-3 md:mb-4'>
            {project.summary}
          </Markdown>
          <p className='font-medium text-xs md:text-base text-muted-foreground mb-1 md:mb-3'>
            {project.period}
          </p>
          <p className='font-medium text-xs md:text-base text-muted-foreground'>{project.role}</p>
        </section>
        <ResponsibilityItem responsibilities={project.responsibilities} />
        <section className='mt-5 p-4 bg-surface rounded-lg md:rounded-2xl'>
          <h2 className='w-full font-semibold text-base md:text-xl mb-4'>
            <span className='mr-2'>🧩</span>문제 해결
          </h2>
          {project.problemSolving.map((problem) => (
            <div
              key={problem.id}
              className='space-y-4 md:space-y-5'
            >
              <h3 className='font-semibold text-sm md:text-[18px]'>{problem.title}</h3>
              <div className='text-sm md:text-base'>
                <p className='font-semibold'>[문제]</p>
                <Markdown>{problem.problem}</Markdown>
              </div>
              <div className='text-sm md:text-base'>
                <p className='font-semibold'>[해결]</p>
                <Markdown>{problem.solution}</Markdown>
              </div>
              <div className='text-sm md:text-base'>
                <p className='font-semibold'>[결과]</p>
                <Markdown>{problem.result}</Markdown>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
