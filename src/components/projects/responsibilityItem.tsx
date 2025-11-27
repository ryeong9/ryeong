'use client';

import { useState } from 'react';
import Markdown from '../common/markdown';
import { GoTriangleDown, GoTriangleRight } from 'react-icons/go';

export default function ResponsibilityItem({
  responsibilities,
}: {
  responsibilities: { id: string; title: string; items: string }[];
}) {
  const [open, setOpen] = useState(false);
  const handleClickOpenBtn = () => {
    setOpen((prev) => !prev);
  };

  return (
    <section className='mt-5 p-4'>
      <button
        type='button'
        onClick={handleClickOpenBtn}
        className='w-full flex items-center font-semibold text-base md:text-xl mb-4'
      >
        <span className='md:hidden text-lg'>
          {open ? <GoTriangleDown className='size-5' /> : <GoTriangleRight className='size-5' />}
        </span>
        <span className='mr-2'>✨</span>담당 파트 요약
      </button>
      <div className={`${open ? 'block' : 'hidden'} md:block`}>
        <div className='flex flex-col space-y-4'>
          {responsibilities.map((responsibility) => (
            <div
              className='py-2 text-sm md:text-[18px]'
              key={responsibility.id}
            >
              <h3 className='font-semibold mb-3'>{responsibility.title}</h3>
              <Markdown className='leading-8'>{responsibility.items}</Markdown>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
