import Button from '../common/button';
import { AiFillHome } from 'react-icons/ai';
import { BiMailSend, BiSolidGridAlt, BiSolidUser } from 'react-icons/bi';
import { CgSoftwareDownload } from 'react-icons/cg';

export default function FootBar() {
  return (
    <div className='md:hidden fixed bottom-0 w-full flex justify-between px-7 pt-6 pb-8 bg-background'>
      <Button
        variant='footBar'
        icon={<AiFillHome className='size-5 sm:size-7' />}
      >
        Home
      </Button>
      <Button
        variant='footBar'
        icon={<BiSolidUser className='size-5 sm:size-7' />}
      >
        About
      </Button>
      <Button
        variant='footBar'
        icon={<BiSolidGridAlt className='size-5 sm:size-7' />}
      >
        Projects
      </Button>
      <Button
        variant='footBar'
        icon={<BiMailSend className='size-5 sm:size-7' />}
      >
        Contact
      </Button>
      <Button
        variant='footBar'
        icon={<CgSoftwareDownload className='size-5 sm:size-7' />}
      >
        Resume
      </Button>
    </div>
  );
}
