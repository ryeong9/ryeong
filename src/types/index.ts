export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'navBar' | 'footBar' | 'notion';
  icon?: React.ReactNode;
  download?: boolean;
  iconPosition?: 'top' | 'left';
  href: string;
};

export type InfoCardProps = {
  title: string;
  children: React.ReactNode;
};

export type AllRepoType = {
  id: number;
  name: string;
  updated_at: string;
  visibility: string;
  html_url: string;
  language: string;
  description: string;
}[];

export type UserType = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
};

export type Day = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type CalendarMonths = 3 | 6 | 12;

export type Project = {
  img_url: string;
  title: string;
  skills: string;
  period: string;
};
