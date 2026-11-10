import React from 'react';

interface FlowerDoodleProps {
  className?: string;
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}

export const FlowerDoodle: React.FC<FlowerDoodleProps> = ({ 
  className = '', 
  color = '#80B86B',
  size = 40,
  style 
}) => {
  // Aspect ratio is 40 width by 56 height
  const height = Math.round((size * 56) / 40);

  return (
    <svg 
      width={size} 
      height={height} 
      viewBox="0 0 40 56" 
      fill="none" 
      className={`select-none pointer-events-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Slender stem */}
      <path d="M20 56 V24" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* 5 rounded petals */}
      <circle cx="20" cy="11" r="5" fill={color} fillOpacity="0.22" stroke={color} strokeWidth="1.5" />
      <circle cx="20" cy="21" r="5" fill={color} fillOpacity="0.22" stroke={color} strokeWidth="1.5" />
      <circle cx="11" cy="16" r="5" fill={color} fillOpacity="0.22" stroke={color} strokeWidth="1.5" />
      <circle cx="29" cy="16" r="5" fill={color} fillOpacity="0.22" stroke={color} strokeWidth="1.5" />
      {/* Center pistil */}
      <circle cx="20" cy="16" r="3.5" fill={color} />
    </svg>
  );
};

