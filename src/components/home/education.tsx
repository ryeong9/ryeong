import InfoCard from './infoCard';

export default function Education() {
  return (
    <InfoCard title='Education'>
      <ul className='list-disc pl-4 space-y-1 md:space-y-5'>
        <li>프로그래머스 데브코스 프론트 엔지니어링 1기</li>
        <li>스위프 웹 10기</li>
      </ul>
    </InfoCard>
  );
}
