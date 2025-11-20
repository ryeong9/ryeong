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
