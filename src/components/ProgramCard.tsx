import Link from 'next/link';

interface ProgramCardProps {
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  bgGradient: string;
  buttonColor: string;
  buttonHoverColor: string;
  tagColor: string;
  textColor: string;
}

const ProgramCard = ({
  title,
  subtitle,
  tagline,
  description,
  href,
  icon,
  bgGradient,
  buttonColor,
  buttonHoverColor,
  tagColor,
  textColor
}: ProgramCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 card-hover flex flex-col h-full border border-gray-100">
      <div className="flex flex-col items-center text-center mb-6">
        <div className={`w-20 h-20 ${bgGradient} rounded-full flex items-center justify-center mb-4 shadow-md`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className={`inline-block ${tagColor} text-sm font-medium px-3 py-1 rounded-full`}>
          {subtitle}
        </div>
      </div>
      
      <div className="flex-grow">
        <p className={`${textColor} font-semibold text-lg mb-3 text-center`}>
          {tagline}
        </p>
        <p className="text-gray-700 leading-relaxed text-center">
          {description}
        </p>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <Link 
          href={href}
          className={`block w-full ${buttonColor} ${buttonHoverColor} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;