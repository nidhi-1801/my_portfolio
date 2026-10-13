'use client';
import { useRef, useState, type ReactNode, type MouseEvent } from 'react';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  max?: number;
};

/** Wrapper that gives any card a 3D tilt following the mouse. */
export const TiltCard = ({ children, className = '', max = 9 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    'perspective(1100px) rotateX(0deg) rotateY(0deg)'
  );

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(1100px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`
    );
  };

  const handleLeave = () => {
    setTransform('perspective(1100px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transform, transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};
