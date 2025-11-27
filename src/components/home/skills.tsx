import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoGit, BiLogoJavascript, BiLogoReact, BiLogoTypescript } from 'react-icons/bi';
import { IoLogoVercel } from 'react-icons/io5';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiReactquery } from 'react-icons/si';
import FigmaIcon from '@/assets/icons/figma.svg';
import ZustandIcon from '@/assets/icons/zustand.svg';

export default function Skills() {
  return (
    <div className='px-5 md:px-12 py-4 md:py-7 mb-5 border border-border rounded-lg md:rounded-2xl card-shadow'>
      <h2 className='text-base md:text-2xl font-semibold mb-2'>Skills</h2>
      <div className='grid grid-cols-4 gap-x-5 gap-y-4 md:grid-cols-6 lg:grid-cols-8 place-items-center'>
        <AiFillHtml5 className='size-9 md:size-16 text-[#E34F26] skill-scale' />
        <BiLogoJavascript className='size-9 md:size-16 text-[#F7DF1E] skill-scale' />
        <BiLogoTypescript className='size-9 md:size-16 text-[#3178C6] skill-scale' />
        <BiLogoReact className='size-9 md:size-16 text-[#61DAFB] skill-scale' />
        <RiNextjsFill className='size-9 md:size-16 text-[#000000] skill-scale' />
        <SiReactquery className='size-9 md:size-16 text-[#FF4154] skill-scale' />
        <RiTailwindCssFill className='size-9 md:size-16 text-[#06B6D4] skill-scale' />
        <BiLogoGit className='size-9 md:size-16 text-[#F05032] skill-scale' />
        <IoLogoVercel className='size-9 md:size-16 text-[#000000] skill-scale' />
        <ZustandIcon className='w-9 md:w-16 h-9 md:h-16 skill-scale' />
        <FigmaIcon className='size-8 md:size-14 skill-scale' />
      </div>
    </div>
  );
}
