'use client';

interface ProcessCardProps {
  step: string;
  title: string;
  desc: string;
}

export function ProcessCard({ step, title, desc }: ProcessCardProps) {
  return (
    <div
      className="process-card group relative p-8 border border-white/10 cursor-pointer"
    >
      <p
        className="mb-4 text-xs tracking-[0.2em] font-medium transition-colors duration-300 group-hover:text-signal"
        style={{ color: 'var(--signal)' }}
      >
        {step}
      </p>

      <h3
        className="font-display mb-4 transition-colors duration-300"
        style={{
          fontSize: '1.55rem',
          color: 'var(--paper)',
          lineHeight: 1.15,
        }}
      >
        {title}
      </h3>

      <p
        className="transition-colors duration-300"
        style={{
          color: 'var(--smoke)',
          lineHeight: 1.8,
        }}
      >
        {desc}
      </p>

      <div className="process-card-accent" aria-hidden="true" />
    </div>
  );
}
