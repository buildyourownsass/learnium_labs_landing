interface WhyProgramWorksCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
}

const WhyProgramWorksCard = ({ title, description, icon, bgGradient }: WhyProgramWorksCardProps) => {
  return (
    <div className="bg-green-800 rounded-2xl shadow-xl h-full p-8 text-center card-hover border border-green-700 hover:bg-green-900 transition-colors duration-300">
      <div className={`w-16 h-16 ${bgGradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-md`}>
        {icon}
      </div>
      <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
      <p className="text-green-100 leading-relaxed">{description}</p>
    </div>
  );
};

export default WhyProgramWorksCard;