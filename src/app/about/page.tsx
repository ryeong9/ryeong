import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className='pb-28 md:py-24'>
      <h1 className='md:hidden w-full px-1 py-2 mt-9 mb-5 text-xl font-bold'>About</h1>
      <section className='pb-7 md:pb-10 flex justify-center items-center border-b border-border'>
        <div className='relative w-[85px] md:w-46 lg:w-60 h-[85px] md:h-46 lg:h-60 overflow-hidden'>
          <Image
            src='/profile.jpg'
            alt='profile'
            fill={true}
            sizes='(min-width: 1024px) 240px, (min-width: 768px) 184px, 85px'
            className='rounded-full object-cover'
            priority
          />
        </div>
        <div className='flex flex-col text-sm md:text-xl font-normal leading-relaxed md:leading-9 ml-5 md:ml-14 tracking-[0.03em]'>
          <p>
            <span className='mr-3'>👩🏻</span>최성령
          </p>
          <p>
            <span className='mr-3'>🎂</span>2001.07.28
          </p>
          <p>
            <span className='mr-3'>🏠</span>서울특별시 강서구
          </p>
          <p>
            <span className='mr-3'>📧</span>oaoa0728@gmail.com
          </p>
        </div>
      </section>
      <section className='p-5 md:px-9 lg:px-24'>
        <h3 className='leading-7 mt-2 md:mt-6 lg:mt-11 mb-4 font-semibold text-base md:text-xl'>
          1. 사용자 경험을 최우선으로 생각합니다.
        </h3>
        <p className='leading-9 text-sm md:text-base'>
          사용자의 입장에서 웹사이트를 사용하던 경험을 잊지 않고, 개발자가 된 지금도 모든 기능을
          <span className='font-semibold'>“사용자가 불편하지 않을까?”</span>라는 기준으로
          바라봅니다. 작은 UI 하나도 사용자 입장에서 다시 확인하는 편이며, 그래서 UI 구조나 동작을
          설계할 때도 <span className='font-semibold'>가독성과 사용성</span>을 가장 먼저 고려합니다.
        </p>
        <h3 className='leading-7 mt-11 mb-4 font-semibold text-base md:text-xl'>
          2. 천천히 쌓아도 확실하게 이해하며, 모르는 것은 끝까지 파고듭니다.
        </h3>
        <p className='font-normal leading-9 text-sm md:text-base'>
          빠르게 배우는 데 어려움은 없지만, 단순 구현보다는{' '}
          <span className='font-semibold'>확실히 이해하고 넘어가는 것</span> 을 더 중요하게
          생각합니다. 비전공자로 시작하여 기초부터 차근차근 쌓아왔고, 필요한 개념은 직접 확인하며
          익혀왔습니다. 모르는 문제가 생기면{' '}
          <span className='font-semibold'>끝까지 파고들어 해결</span>하려고 합니다.
        </p>
        <h3 className='leading-7 mt-11 mb-4 font-semibold text-base md:text-xl'>
          3. 협업과 소통을 좋아합니다.
        </h3>
        <p className='font-normal leading-9 text-sm md:text-base'>
          팀 프로젝트에서는 <span className='font-semibold'>일정과 작업 범위를 명확히 공유</span>
          하며, 서로의 흐름을 깨지 않는 개발을 목표로 합니다. 작은 기능이라도{' '}
          <span className='font-semibold'>팀원들이 이해하기 쉬운 코드와 구조</span>를 유지하려
          노력합니다. 함께 일할 때 좋은 결과가 나온다는 것을 알기 때문에, 소통과 협업을 중요하게
          생각합니다.
        </p>
      </section>
    </main>
  );
}
