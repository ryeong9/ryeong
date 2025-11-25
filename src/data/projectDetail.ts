import { ProjectDetail } from '@/types';

export const PROJECT_DETAIL: ProjectDetail[] = [
  {
    id: '1',
    title: 'Ryeong',
    notionUrl: '',
    summary: '개인 웹 포트폴리오',
    period: '2025.11.08 ~ ing',
    role: 'UIUX & FrontEnd Developer',
    responsibilities: [
      {
        title: '',
        items: ['', ''],
      },
    ],
    problemSolving: [
      {
        title: '',
        problem: '',
        solution: '',
        result: '',
      },
    ],
  },
  {
    id: '2',
    title: 'INDEX',
    notionUrl:
      'https://accurate-vegetarian-ab4.notion.site/INDEX-26864524676c80beae0bd2e03b11d07f?pvs=74',
    summary: '감정 기반 독서 기록 서비스',
    period: '2025.06.30 ~ 2025.08.31',
    role: 'Frontend Developer (FE 2명 중 1명)',

    responsibilities: [
      {
        title: '초기 환경 세팅 및 협업 프로세스',
        items: [
          'Next.js + TS 기반 초기 세팅',
          'ESLint/Prettier 적용 및 코드 규칙 정립',
          'GitHub Flow 기반 브랜치 전략 및 PR 중심의 작업 공유·병합 프로세스 운영',
          'Vercel 배포 환경 구성 및 운영',
        ],
      },
      {
        title: '랜딩 페이지 개발',
        items: [
          '사용자 맞춤형 대시보드 구현',
          'Chart.js 기반 월별 독서량·감정 요약',
          'Zustand로 전역 상태 관리',
        ],
      },
      {
        title: '독서 리포트 페이지',
        items: ['달력 기반 독서 활동 조회 기능'],
      },
      {
        title: 'CRUD 기능',
        items: ['독서 기록 작성 / 수정 / 삭제 기능 구현'],
      },
    ],

    problemSolving: [
      {
        title: '📐 Swiper 기반 캐러셀 초기 깨짐 문제 개선',
        problem:
          'SSR + 데이터 로딩 타이밍 문제로 Swiper가 DOM 크기를 잘못 계산\n첫 진입 시 UI가 깨지는 현상 발생 (새로고침 시 정상)',
        solution:
          'Swiper 의존성 제거하고, 그룹 단위 슬라이드 및 translateX 기반의 맞춤형 슬라이더를 직접 구현',
        result: '초기 깨짐 현상 완전 해소\nNext.js 환경에서 안정적으로 동작하는 캐러셀로 개선',
      },
    ],
  },
  {
    id: '3',
    title: 'ROOM:IT',
    notionUrl:
      'https://accurate-vegetarian-ab4.notion.site/ROOM-IT-1e064524676c80088582e23483cdf289?pvs=74',
    summary: '사용자와 사업자가 모두 사용할 수 있는 스터디룸 예약 플랫폼',
    period: '2024.11.18 ~ 2024.12.09',
    role: 'Frontend Developer (FE 3명 중 1명)',

    responsibilities: [
      {
        title: '사용자 및 사업자 인증 기능',
        items: ['카카오/네이버 OAuth 로그인 구현', '사용자 / 사업자 회원가입 및 인증 흐름 구성'],
      },
      {
        title: '사업자 전용 서비스 기능',
        items: [
          '사업장 등록 및 룸 추가 기능 구현',
          'Presigned URL 기반 이미지 업로드 시스템 구축',
          '사업장 수정 / 룸 수정 기능 구현',
        ],
      },
      {
        title: '사업장 상세 페이지 구현',
        items: ['cursor 기반 페이징 + useInfiniteQuery로 리뷰 무한 스크롤 구현'],
      },
    ],

    problemSolving: [
      {
        title: '📷 Presigned URL을 활용한 이미지 업로드 구조 개선',
        problem: '이미지 파일을 서버에 전달 후 S3로 업로드해야 하므로 서버 부하 증가 가능성',
        solution:
          '백엔드와 협의하여 Presigned URL 방식을 도입\n클라이언트 → S3 직접 업로드 구조로 개선',
        result: '서버 부하 가능성 감소',
      },
    ],
  },
];
