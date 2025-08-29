import React from 'react';
import logoLight from '../assets/logo.svg';
import logoDark from '../assets/logo-white.svg';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'light', size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-24 h-8',   // 96px x 32px
    md: 'w-32 h-10',  // 128px x 40px  
    lg: 'w-40 h-12',  // 160px x 48px
    xl: 'w-50 h-15'   // 200px x 60px
  };

  const logoSrc = variant === 'dark' ? logoDark : logoLight;

  return (
    <img
      src={logoSrc}
      alt="zeWOWorld - Professional Services"
      className={`${sizeClasses[size]} ${className}`}
      style={{ 
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
        transition: 'all 0.3s ease'
      }}
    />
  );
};

export default Logo;