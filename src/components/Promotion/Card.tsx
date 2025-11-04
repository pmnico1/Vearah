import Image from 'next/image';
import DecorativeGradient from '@/assets/svgs/DecorativeGradient';

interface CardProps {
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
}

export default function Card({ children, image, imageAlt }: CardProps) {
  return (
    <div
      className="flex flex-col justify-end items-start w-full max-w-[530px] min-h-[450px] h-full rounded-[40px] relative overflow-hidden group"
      style={{
        background: 'radial-gradient(72.32% 44% at 51.71% 0%, rgba(129, 187, 255, 0.3) 0%, rgba(25, 25, 25, 0) 100%)'
      }}
    >
      {/* Background Image */}
      {image && (
        <div className="inset-0 z-0">
          <Image
            src={image}
            alt={imageAlt || ''}
            fill
            className="object-center group-hover:opacity-80 transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full group-hover:opacity-100 opacity-0 transition-opacity duration-1000 z-10">
        <DecorativeGradient width="100%" height="96" />
      </div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}
