import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function Counter({ value, decimals = 0, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  // margin: '0px' instead of '-50px' — on mobile, -50px margin means
  // the element must be 50px INSIDE the viewport to trigger, which often
  // never happens on short mobile screens. 0px is reliable everywhere.
  const isInView = useInView(ref, { once: true, margin: '0px' });
  const [displayValue, setDisplayValue] = useState('0');

  // Parse numeric target from string (e.g., '15,000+' -> 15000, '98.4%' -> 98.4)
  const numericTarget = parseFloat(value.toString().replace(/[^0-9.]/g, '')) || 0;

  const motionValue = useMotionValue(0);
  // Faster spring: stiffness 60→80, damping 20 for snappier count-up
  const springValue = useSpring(motionValue, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericTarget);
    }
  }, [isInView, numericTarget, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (decimals > 0) {
        setDisplayValue(latest.toFixed(decimals));
      } else {
        setDisplayValue(Math.floor(latest).toLocaleString('en-IN'));
      }
    });
    return () => unsubscribe();
  }, [springValue, decimals]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
