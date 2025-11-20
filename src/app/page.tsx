import Education from '@/components/home/education';
import Profile from '@/components/home/profile';

export default function Home() {
  return (
    <main>
      <h1 className='md:hidden w-full px-1 py-2 mt-9 mb-5 text-xl font-bold'>Home</h1>
      <section className='grid grid-cols-1 md:grid-cols-2 md:gap-6'>
        <Profile />
        <Education />
      </section>
    </main>
  );
}
