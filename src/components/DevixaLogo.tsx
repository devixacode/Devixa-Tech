import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  textColor?: string;
}

export const DevixaLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'text-white'
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  }[size];

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Devixa Geometric Arrow 'D' Mark */}
      <svg
        className={`${iconDimensions} shrink-0 transition-transform duration-300 hover:scale-105`}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Arc - Vibrant Magenta/Fuchsia */}
        <path
          d="M38 18H58C86 18 108 36 108 60C108 63 107 66 106 69L62 38L38 18Z"
          fill="url(#magentaGrad)"
        />
        {/* Bottom Arc - Electric Cyan/Blue */}
        <path
          d="M38 102H58C86 102 108 84 108 60C108 57 107 54 106 51L62 82L38 102Z"
          fill="url(#cyanGrad)"
        />
        {/* Left Dark Navy / Deep Indigo Bracket & Arrow Base */}
        <path
          d="M18 18H46V44H38V76H46V102H18V18Z"
          fill="#1E293B"
        />
        {/* Inner Arrow Point / Contrast Navy Edge */}
        <path
          d="M38 44L66 60L38 76V44Z"
          fill="#2563EB"
        />
        {/* Forward negative space arrow overlay */}
        <path
          d="M44 48L62 60L44 72V48Z"
          fill="#FFFFFF"
          fillOpacity="0.95"
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="magentaGrad" x1="38" y1="18" x2="108" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F43F5E" />
            <stop offset="1" stopColor="#E1146B" />
          </linearGradient>
          <linearGradient id="cyanGrad" x1="38" y1="102" x2="108" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0284C7" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span className={`${textSizes} font-heading font-extrabold tracking-tight ${textColor} flex items-center`}>
            DEVIXA<span className="text-blue-500 font-bold ml-0.5">TECH</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-gray-400 font-semibold mt-0.5">
            Digital Solutions
          </span>
        </div>
      )}
    </div>
  );
};
