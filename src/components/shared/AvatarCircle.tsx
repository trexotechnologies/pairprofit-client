import React from 'react';
import Image from 'next/image';

const avatars = [
  'https://i.pravatar.cc/150?u=1',
  'https://i.pravatar.cc/150?u=2',
  'https://i.pravatar.cc/150?u=3',
  'https://i.pravatar.cc/150?u=4',
  'https://i.pravatar.cc/150?u=5',
  'https://i.pravatar.cc/150?u=6',
  'https://i.pravatar.cc/150?u=7',
  'https://i.pravatar.cc/150?u=8',
];

const AvatarCircle = () => {
  return (
    <div className="relative w-full max-w-[800px] aspect-[2/1] mx-auto flex items-center justify-center">
      {/* The Ellipse Path (SVG) */}
      <svg
        viewBox="0 0 800 400"
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="400"
          cy="200"
          rx="350"
          ry="150"
          stroke="#1680ab"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="opacity-30"
        />
        {/* Connection arrows - simplified as an ellipse for now */}
        <ellipse
          cx="400"
          cy="200"
          rx="350"
          ry="150"
          stroke="#1680ab"
          strokeWidth="0.5"
        />

        {/* Arrows */}
        <path d="M745 200 L755 205 L755 195 Z" fill="#1680ab" />
        <path d="M745 210 L755 215 L755 205 Z" fill="#1680ab" />
      </svg>

      {/* Avatars */}
      {avatars.map((src, index) => {
        const angle = (index * (360 / avatars.length) - 90) * (Math.PI / 180);
        const x = 50 + 44 * Math.cos(angle); // percentage based
        const y = 50 + 38 * Math.sin(angle); // percentage based

        return (
          <div
            key={index}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white shadow-lg overflow-hidden transition-transform hover:scale-110 cursor-pointer">
              <Image
                src={src}
                alt={`User ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
            {/* Background glowing effect for some */}
            {index % 3 === 0 && (
              <div className="absolute -inset-2 bg-[#1680ab]/10 rounded-full -z-10 blur-sm"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AvatarCircle;
