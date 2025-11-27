'use client';

import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className='hidden md:flex text-muted-foreground hover:text-foreground cursor-pointer'
    >
      <BiArrowBack className='size-6' />
    </button>
  );
}
