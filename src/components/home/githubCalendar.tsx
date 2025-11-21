'use client';

import { useCalendarMonths } from '@/hooks/useCalendarMonths';
import { Day } from '@/types';
import { GitHubCalendar } from 'react-github-calendar';

function filterByLastMonths(contributions: Day[], months: number): Day[] {
  const now = new Date();
  const from = new Date(now.getFullYear(), now.getMonth() - months, now.getDate());

  return contributions.filter((day) => {
    const d = new Date(day.date);
    return d >= from;
  });
}

export default function GithubCalendar() {
  const months = useCalendarMonths();

  const transformData = (contributions: Day[]) => {
    return filterByLastMonths(contributions, months);
  };

  return (
    <section className='w-full py-3 pl-3 sm:pl-6 md:pl-8'>
      <h1 className='w-full text-left pl-2 font-medium text-xs md:text-sm lg:text-base mb-2 leading-normal'>
        contribution
      </h1>
      <GitHubCalendar
        username='ryeong9'
        blockSize={10}
        blockMargin={2}
        fontSize={9}
        showTotalCount={false}
        showColorLegend={false}
        transformData={transformData}
      />
    </section>
  );
}
