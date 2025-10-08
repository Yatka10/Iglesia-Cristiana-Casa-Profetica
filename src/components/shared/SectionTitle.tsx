interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = false, light = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <p className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
          light ? "text-accent-light" : "text-primary"
        }`}>
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}>
        {title}
      </h2>
      <div className={`h-1 w-20 bg-accent mt-4 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionTitle;
