export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'navBar' | 'footBar' | 'notion';
  icon?: React.ReactNode;
  iconPosition?: 'top' | 'left';
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
