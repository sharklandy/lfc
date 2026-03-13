interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionTitle({ subtitle, title, description, light = false, center = true }: SectionTitleProps) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      {subtitle && (
        <span className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${light ? 'text-accent-light' : 'text-accent'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
      <div className={`w-20 h-1 bg-accent rounded-full mt-6 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}
