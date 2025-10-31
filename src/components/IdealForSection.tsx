interface IdealForItem {
  title: string;
  description: string;
}

interface IdealForSectionProps {
  title?: string;
  items: IdealForItem[];
  bgColor: string;
  textColor: string;
  columns?: 2 | 3 | 4;
}

export default function IdealForSection({ 
  title = "Ideal For", 
  items, 
  bgColor, 
  textColor,
  columns = 3 
}: IdealForSectionProps) {
  const getGridClass = () => {
    switch (columns) {
      case 2: return 'grid md:grid-cols-2 gap-8';
      case 3: return 'grid md:grid-cols-3 gap-8';
      case 4: return 'grid md:grid-cols-2 lg:grid-cols-4 gap-6';
      default: return 'grid md:grid-cols-3 gap-8';
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{title}</h2>
          <div className={getGridClass()}>
            {items.map((item, index) => (
              <div key={index} className={`${bgColor} p-6 rounded-xl`}>
                <h3 className={`text-xl font-bold ${textColor} mb-4`}>{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}