interface ProgramOverviewProps {
  title?: string;
  description?: string;
  sections: {
    title: string;
    backgroundColor: string;
    titleColor: string;
    iconColor: string;
    items: string[];
  }[];
}

const ProgramOverview = ({ 
  title = "Program Overview", 
  description, 
  sections 
}: ProgramOverviewProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">{title}</h2>
          {description && (
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
              {description}
            </p>
          )}
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {sections.map((section, index) => (
              <div key={index} className={`${section.backgroundColor} p-8 rounded-xl`}>
                <h3 className={`text-2xl font-bold ${section.titleColor} mb-4`}>
                  {section.title}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <svg className={`w-5 h-5 ${section.iconColor} mr-3`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;