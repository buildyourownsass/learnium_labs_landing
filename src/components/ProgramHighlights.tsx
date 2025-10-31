interface ProgramHighlight {
  icon: string;
  iconColor: string;
  bgColor: string;
  title: string;
  description: string;
}

interface ProgramHighlightsProps {
  title?: string;
  highlights: ProgramHighlight[];
  backgroundColor?: string;
}

const ProgramHighlights = ({ 
  title = "Program Highlights", 
  highlights,
  backgroundColor = "bg-gray-50"
}: ProgramHighlightsProps) => {
  return (
    <section className={`section-padding ${backgroundColor}`}>
      <div className="container-max">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`w-16 h-16 ${highlight.bgColor} rounded-full flex items-center justify-center mb-6`}>
                <svg className={`w-8 h-8 ${highlight.iconColor}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d={highlight.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;