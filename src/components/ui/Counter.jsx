import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function Counter({ value, decimals = 0, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  // Parse numeric target from string (e.g., '15,000+' -> 15000, '98.4%' -> 98.4)
  const numericTarget = parseFloat(value.toString().replace(/[^0-9.]/g, '')) || 0;

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 45,
    damping: 15,
    duration: 2
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
        setDisplayValue(Math.floor(latest).toLocaleString('en-US'));
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
