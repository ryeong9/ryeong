import Image from 'next/image';
import Button from '../common/button';

export default function NavBar() {
  return (
    <div className='hidden fixed md:flex w-full px-16 py-5 justify-between bg-background z-10'>
      <div className='flex px-4 py-1 gap-3 items-center'>
        <Button variant='navBar'>Home</Button>
        <Button variant='navBar'>About Me</Button>
        <Button variant='navBar'>Projects</Button>
      </div>
      <div className='flex px-4 gap-3 items-center'>
        <Button variant='navBar'>Contact</Button>
        <Button variant='navBar'>Resume</Button>
        <div className='relative w-[50px] h-[50px] overflow-hidden'>
          <Image
            src='/profile.jpg'
            alt='profile'
            fill={true}
            sizes='50px'
            className='rounded-full object-cover'
            priority
          />
        </div>
      </div>
    </div>
  );
}
