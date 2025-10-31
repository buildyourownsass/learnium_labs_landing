interface WhyProgramWorksCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
}

const WhyProgramWorksCard = ({ title, description, icon, bgGradient }: WhyProgramWorksCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center card-hover border border-gray-100">
      <div className={`w-16 h-16 ${bgGradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-md`}>
        {icon}
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-4">{title}</h4>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default WhyProgramWorksCard;