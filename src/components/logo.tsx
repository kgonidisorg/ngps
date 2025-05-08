import React from 'react';

export interface NGPSIconProps {
  /** Icon width & height in px */
  size?: number;
  /** Stroke color */
  color?: string;
  /** Optional classname for extra styling */
  className?: string;
}

const NGPSIcon: React.FC<NGPSIconProps> = ({
  size = 24,
  color = '#000',
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer ring */}
    <circle
      cx="12"
      cy="12"
      r="8"
      stroke={color}
      strokeWidth="2"
    />
    {/* Crosshair lines */}
    <line x1="12" y1="4" x2="12" y2="8" stroke={color} strokeWidth="2" />
    <line x1="12" y1="16" x2="12" y2="20" stroke={color} strokeWidth="2" />
    <line x1="4"  y1="12" x2="8"  y2="12" stroke={color} strokeWidth="2" />
    <line x1="16" y1="12" x2="20" y2="12" stroke={color} strokeWidth="2" />
  </svg>
);

export default NGPSIcon;
