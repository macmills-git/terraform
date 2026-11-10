import React from 'react';

interface SparkleProps {
  className?: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export const Sparkle: React.FC<SparkleProps> = ({ 
  className = '', 
  size = 20, 
  color = '#80B86B',
  style 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#80B86B] select-none pointer-events-none transition-transform duration-700 hover:scale-125 ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Precision 4-point star with curved concave flanks matching Inspiration 1 */}
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
};
