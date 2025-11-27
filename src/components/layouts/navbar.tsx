import Image from 'next/image';
import LinkButton from '../common/linkButton';
import ActionButton from '../common/actionButton';

export default function NavBar() {
  return (
    <div className='hidden fixed md:flex w-full px-16 py-5 justify-between bg-background z-10'>
      <div className='flex px-4 py-1 gap-3 items-center'>
        <LinkButton
          href='/'
          variant='navBar'
        >
          Home
        </LinkButton>
        <LinkButton
          href='/about'
          variant='navBar'
        >
          About Me
        </LinkButton>
        <LinkButton
          href='/projects'
          variant='navBar'
        >
          Projects
        </LinkButton>
      </div>
      <div className='flex px-4 gap-3 items-center'>
        <ActionButton
          href='mailto:oaoa0728@gmail.com'
          variant='navBar'
        >
          Contact
        </ActionButton>
        <ActionButton
          href=''
          download={true}
          variant='navBar'
        >
          Resume
        </ActionButton>
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
