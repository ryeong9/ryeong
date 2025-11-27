import LinkButton from '../common/linkButton';
import { AiFillHome } from 'react-icons/ai';
import { BiMailSend, BiSolidGridAlt, BiSolidUser } from 'react-icons/bi';
import { CgSoftwareDownload } from 'react-icons/cg';
import ActionButton from '../common/actionButton';

export default function FootBar() {
  return (
    <div className='md:hidden fixed bottom-0 w-full flex justify-between px-7 pt-6 pb-8 bg-background'>
      <LinkButton
        href='/'
        variant='footBar'
        icon={<AiFillHome className='size-5 sm:size-7' />}
      >
        Home
      </LinkButton>
      <LinkButton
        href='/about'
        variant='footBar'
        icon={<BiSolidUser className='size-5 sm:size-7' />}
      >
        About
      </LinkButton>
      <LinkButton
        href='/projects'
        variant='footBar'
        icon={<BiSolidGridAlt className='size-5 sm:size-7' />}
      >
        Projects
      </LinkButton>
      <ActionButton
        href='mailto:oaoa0728@gmail.com'
        variant='footBar'
        icon={<BiMailSend className='size-5 sm:size-7' />}
      >
        Contact
      </ActionButton>
      <ActionButton
        href=''
        download={true}
        variant='footBar'
        icon={<CgSoftwareDownload className='size-5 sm:size-7' />}
      >
        Resume
      </ActionButton>
    </div>
  );
}
