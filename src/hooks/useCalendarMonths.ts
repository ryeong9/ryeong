'use client';

import { CalendarMonths } from '@/types';
import { useEffect, useState } from 'react';

export function useCalendarMonths(): CalendarMonths {
  const [months, setMonths] = useState<CalendarMonths>(12);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;

      if (width < 546) {
        setMonths(3);
      } else if (width < 1440) {
        setMonths(6);
      } else {
        setMonths(12);
      }
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return months;
}
