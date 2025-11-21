import { languageColors } from '@/constants/githubColors';
import { getUserAllRepo, getUserInfo } from '@/lib/github';
import { githubTimeAgo } from '@/lib/time';
import Image from 'next/image';

export default async function Github() {
  const userInfo = await getUserInfo();
  const allRepo = await getUserAllRepo();

  return (
    <section className='px-5 md:px-12 py-4 md:py-7 mb-5 border border-border rounded-lg md:rounded-2xl'>
      <h2 className='text-base md:text-2xl font-semibold mb-2'>Github</h2>
      <section className='flex px-7 py-2'>
        <div className='flex flex-col items-center py-3'>
          <div className='relative w-11 h-11 md:w-24 md:h-24 lg:w-40 lg:h-40 mb-2 md:mb-4 lg:mb-5'>
            <Image
              src={userInfo.avatar_url}
              alt='avatar'
              fill={true}
              sizes='44px'
              className='rounded-full object-cover'
              priority
            />
          </div>
          <div className='w-full text-xs md:text-base lg:text-xl leading-normal'>
            <p className='font-semibold'>{userInfo.name}</p>
            <p className='font-medium text-muted-foreground'>{userInfo.login}</p>
          </div>
        </div>
      </section>
      <ul className='grid grid-cols-1 md:grid-cols-2 px-1 py-2 gap-4 md:gap-9'>
        {allRepo.map((repo) => (
          <li
            key={repo.id}
            className='px-4 md:px-7 py-3 md:py-6 border border-border rounded-lg md:rounded-2xl'
          >
            <div className='flex justify-between items-center mb-1 md:mb-3'>
              <p className='text-xs md:text-base text-[#0769DA] font-semibold truncate w-40 md:w-auto'>
                {repo.name}
              </p>
              <p className='px-2 py-1 md:px-3 border border-border rounded-2xl text-[8px] md:text-xs leading-normal'>
                {repo.visibility}
              </p>
            </div>
            <div className='flex text-[8px] md:text-xs text-muted-foreground leading-normal items-center'>
              {repo.language && (
                <div className='flex items-center gap-1 mr-4'>
                  <span
                    className='inline-block w-2 md:w-3 h-2 md:h-3 rounded-full'
                    style={{
                      backgroundColor: languageColors[repo.language] ?? '',
                    }}
                  />
                  <span>{repo.language}</span>
                </div>
              )}
              <p>{githubTimeAgo(repo.updated_at)}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
