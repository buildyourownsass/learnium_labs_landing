interface CoreValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
}

const CoreValueCard = ({ title, description, icon, bgGradient }: CoreValueCardProps) => {
  return (
    <div className="bg-white h-full rounded-2xl shadow-xl p-6 card-hover border border-gray-100 hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        {/* Icon container */}
        <div className={`w-16 h-16 ${bgGradient} rounded-full flex items-center justify-center flex-shrink-0 shadow-md`}>
          {icon}
        </div>
        
        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Title */}
          <h4 className="text-xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
            {title}
          </h4>
          
          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreValueCard;