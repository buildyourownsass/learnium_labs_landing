interface CompanyInfoCardProps {
  title: string;
  description: string;
}

const CompanyInfoCard = ({ title, description }: CompanyInfoCardProps) => {
  return (
    <div className="bg-green-100 p-8 rounded-xl border border-green-200 h-full">
      <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--color-primary)' }}>
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed text-justify">
        {description}
      </p>
    </div>
  );
};

export default CompanyInfoCard;