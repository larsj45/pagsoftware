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
    sm: 'h-8',
    md: 'h-12', 
    lg: 'h-16'
  };

  const logoSrc = {
    color: '/images/logo-color.png',
    black: '/images/logo-black.png', 
    white: '/images/logo-white.png'
  };

  return (
    <img
      src={logoSrc[variant]}
      alt="PagSoftware"
      className={`${sizeClasses[size]} w-auto ${className}`}
    />
  );
}