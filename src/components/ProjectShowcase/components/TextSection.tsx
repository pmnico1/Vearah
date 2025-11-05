'use client';

interface TextSectionProps {
  content?: string;
  tagline?: string;
}

export default function TextSection({ content, tagline }: TextSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="w-full relative z-10">
        <div className="space-y-12">
          {content && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-relaxed cursor-default">
              <span className="block">
                {content}
              </span>
            </h2>
          )}

          {tagline && (
            <p className="text-base md:text-xl text-gray-400 leading-relaxed cursor-default">
              <span className="block">
                {tagline}
              </span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

