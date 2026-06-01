'use client';

interface ProcessCardProps {
  step: string;
  title: string;
  desc: string;
}

export function ProcessCard({ step, title, desc }: ProcessCardProps) {
  return (
    <div
      className="group relative p-8 border border-white/10 transition-all duration-300 cursor-pointer"
      style={{
        background: 'rgba(12, 12, 12, 0.5)',
        backdropFilter: 'blur(10px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--signal)';
        e.currentTarget.style.background = 'rgba(200, 75, 48, 0.08)';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(200, 75, 48, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.background = 'rgba(12, 12, 12, 0.5)';
        e.currentTarget.style.boxShadow = 'none';
      }}
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

      {/* Hover accent line */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-signal transition-all duration-500"
        style={{ width: '0%' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.width = '100%';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.width = '0%';
        }}
      />
    </div>
  );
}
