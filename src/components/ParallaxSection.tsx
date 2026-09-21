import { useInView } from "../lib/hooks";

interface ParallaxSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  height?: string;
  overlay?: boolean;
}

export default function ParallaxSection({
  image,
  title,
  subtitle,
  height = "h-[60vh]",
  overlay = true,
}: ParallaxSectionProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`parallax-section relative ${height} overflow-hidden`}
    >
      <img
        src={image}
        alt=""
        className={`parallax-bg transition-transform duration-[2s] ease-out ${
          inView ? "scale-100" : "scale-110"
        }`}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 via-charcoal-950/30 to-charcoal-950/80" />
      )}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <div
          className={`transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-snow sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base text-mist sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
