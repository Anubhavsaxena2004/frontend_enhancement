import React from 'react';

export default function Marquee({ children, speed = '25s', reverse = false, pauseOnHover = true, className = '' }) {
  return (
    <div className={`flex whitespace-nowrap overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_128px,black_calc(100%-128px),transparent)] ${className}`}>
      <div 
        className={`flex items-center gap-8 shrink-0 animate-marquee ${reverse ? 'direction-reverse' : ''} ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{ animationDuration: speed }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
