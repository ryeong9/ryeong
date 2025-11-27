import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsCard({ img_url, title, skills, period, id }: Project) {
  return (
    <Link
      href={`/projects/${id}`}
      className='w-full p-6 border border-border rounded-2xl card-shadow md:hover:scale-[1.02]'
    >
      <div className='relative w-full h-28 md:h-48 overflow-hidden rounded-2xl'>
        <Image
          src={img_url}
          alt='thumbnail'
          fill
          className='object-cover'
        />
      </div>
      <div className='flex flex-col font-semibold gap-y-2 mt-6 lg:mt-3'>
        <p className='text-[18px] md:text-xl'>{title}</p>
        <p className='text-xs md:text-sm text-muted-foreground truncate'>{skills}</p>
        <p className='text-xs md:text-sm text-muted-foreground'>{period}</p>
      </div>
    </Link>
  );
}
