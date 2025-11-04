interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
}

const FeatureCard = ({ title, description, icon, bgGradient }: FeatureCardProps) => {
  return (
    <div className="bg-green-800 rounded-2xl shadow-lg p-8 text-center card-hover border border-green-700 group hover:shadow-xl hover:bg-green-900 transition-all duration-300 hover:-translate-y-1">
      <div className={`w-20 h-20 ${bgGradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-green-100 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;