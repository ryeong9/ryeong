import { ButtonProps } from '@/types';
import Link from 'next/link';

export default function LinkButton({
  children,
  variant = 'navBar',
  icon,
  iconPosition = 'left',
  href,
}: ButtonProps) {
  const variantStyles = {
    navBar:
      'px-7 md:px-4 py-1.5 text-sm md:text-base lg:text-xl font-semibold border border-transparent hover:bg-primary hover:border-secondary',
    footBar: 'flex flex-col items-center px-2 py-1 text-xs sm:text-sm font-medium gap-1',
    notion:
      'flex items-center p-2 md:px-7 md:py-2 text-sm md:text-xl font-semibold bg-primary rounded-lg border border-secondary gap-1',
  };

  const isExternal = variant === 'notion';

  return (
    <Link
      href={href}
      className={`rounded-lg cursor-pointer ${variantStyles[variant]}`}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'top' && icon}
    </Link>
  );
}
