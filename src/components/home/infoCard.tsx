import { InfoCardProps } from '@/types';

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className='flex flex-col justify-center px-5 md:px-12 py-4 md:py-7 mb-5 border border-border rounded-lg gap-2 md:gap-4 text-sm md:text-xl font-normal tracking-[0.03em]'>
      <h2 className='text-base md:text-2xl md:text-center font-semibold'>{title}</h2>
      {children}
    </div>
  );
}
