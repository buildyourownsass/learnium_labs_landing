interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

interface ProgramFeatureGridProps {
  title: string;
  subtitle?: string;
  features: FeatureCard[];
  columns?: 3 | 4;
}

export default function ProgramFeatureGrid({ 
  title, 
  subtitle, 
  features, 
  columns = 4 
}: ProgramFeatureGridProps) {
  const gridClass = columns === 3 ? 'grid md:grid-cols-3 gap-8' : 'grid md:grid-cols-2 lg:grid-cols-4 gap-8';
  
  return (
    <section className="section-padding gradient-bg-2">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{title}</h2>
        {subtitle && (
          <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">{subtitle}</p>
        )}
        <div className={gridClass}>
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}