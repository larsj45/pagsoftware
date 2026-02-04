import Image from 'next/image';

interface LogoProps {
  variant?: 'color' | 'black' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ 
  variant = 'color', 
  size = 'md',
  className = '' 
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto', 
    lg: 'h-16 w-auto'
  };

  const logoSrc = {
    color: '/images/logo-color.png',
    black: '/images/logo-black.png', 
    white: '/images/logo-white.png'
  };

  return (
    <Image
      src={logoSrc[variant]}
      alt="PagSoftware"
      width={200}
      height={60}
      className={`${sizeClasses[size]} ${className}`}
      priority
    />
  );
}