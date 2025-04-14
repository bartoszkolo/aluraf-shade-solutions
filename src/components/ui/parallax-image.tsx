import { useEffect, useRef } from 'react';
import { animations } from '@/lib/animations';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ParallaxImage({ src, alt, className = '' }: ParallaxImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        imageRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${animations.parallax} ${className}`}
      />
    </div>
  );
} 