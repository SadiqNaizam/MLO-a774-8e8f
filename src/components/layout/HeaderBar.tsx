import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderBarProps {
  className?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-10', // Positioning & Z-index from Layout Requirements
        'h-16', // Height from Layout Requirements (overall.sizing.header & header.height)
        'bg-header', // Background color from Layout Requirements (header.layout) & tailwind.config.ts
        'flex justify-between items-center', // Flexbox layout from Layout Requirements (header.layout)
        'px-4', // Horizontal padding from Layout Requirements (header.layout)
        className // Allow additional classes to be passed for customization
      )}
      role="banner" // Accessibility: identifies the header landmark
    >
      {/* LeftElement Placeholder: Corresponds to the circle and rectangle on the left in the image */}
      {/* Composed as per Component Hierarchy notes: "minimal placeholder components" */}
      <div className="flex items-center space-x-2">
        {/* Placeholder for a logo or avatar-like element (circle in image) */}
        <div
          className="w-8 h-8 bg-button rounded-full" // Dimensions, custom background (from tailwind.config.ts button: '#ECEEFB'), shape
          aria-label="Logo icon placeholder" // Accessibility: describing the visual placeholder
        ></div>
        {/* Placeholder for application name or branding text (rectangle in image) */}
        <div
          className="w-24 h-6 bg-button rounded" // Dimensions, custom background, shape
          aria-label="Application name placeholder" // Accessibility: describing the visual placeholder
        ></div>
      </div>

      {/* RightElement Placeholder: Corresponds to the rectangle on the right in the image */}
      {/* Composed as per Component Hierarchy notes: "minimal placeholder components" */}
      <div
        className="w-20 h-8 bg-button rounded" // Dimensions, custom background, shape
        aria-label="User actions placeholder" // Accessibility: describing the visual placeholder
      ></div>
    </header>
  );
};

export default HeaderBar;