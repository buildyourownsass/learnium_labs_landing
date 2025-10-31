interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProgramHighlightsSectionProps {
  title: string;
  highlights: {
    leftSection: {
      title: string;
      items: HighlightItem[];
      bgColor: string;
      textColor: string;
    };
    rightSection: {
      title: string;
      items: HighlightItem[];
      bgColor: string;
      textColor: string;
    };
  };
}

export default function ProgramHighlightsSection({ title, highlights }: ProgramHighlightsSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`${highlights.leftSection.bgColor} p-8 rounded-xl`}>
            <h3 className={`text-2xl font-bold ${highlights.leftSection.textColor} mb-6`}>
              {highlights.leftSection.title}
            </h3>
            <ul className="space-y-3 text-gray-700">
              {highlights.leftSection.items.map((item, index) => (
                <li key={index} className="flex items-center">
                  {item.icon}
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`${highlights.rightSection.bgColor} p-8 rounded-xl`}>
            <h3 className={`text-2xl font-bold ${highlights.rightSection.textColor} mb-6`}>
              {highlights.rightSection.title}
            </h3>
            <ul className="space-y-3 text-gray-700">
              {highlights.rightSection.items.map((item, index) => (
                <li key={index} className="flex items-center">
                  {item.icon}
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}