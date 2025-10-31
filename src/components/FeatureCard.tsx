interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
  hoverColor: string;
}

const FeatureCard = ({ title, description, icon, bgGradient, hoverColor }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center card-hover border border-gray-100 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`w-20 h-20 ${bgGradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
        {icon}
      </div>
      <h3 className={`text-xl font-bold text-gray-900 mb-4 ${hoverColor} transition-colors duration-300`}>
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;