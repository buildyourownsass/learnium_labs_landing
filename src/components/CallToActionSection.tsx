import Link from 'next/link';

interface CallToActionSectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundColor: string;
  primaryButtonBg?: string;
  secondaryButtonBorder?: string;
  textColor?: string;
}

export default function CallToActionSection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  backgroundColor,
  primaryButtonBg = "bg-white",
  secondaryButtonBorder = "border-white",
  textColor = "text-white"
}: CallToActionSectionProps) {
  // Extract color for dynamic styling
  const getButtonTextColor = () => {
    if (backgroundColor.includes('orange')) return 'text-orange-600';
    if (backgroundColor.includes('green')) return 'text-green-600';
    if (backgroundColor.includes('blue')) return 'text-blue-600';
    if (backgroundColor.includes('purple')) return 'text-purple-600';
    return 'text-blue-600';
  };

  const getHoverButtonColor = () => {
    if (backgroundColor.includes('orange')) return 'hover:text-orange-600';
    if (backgroundColor.includes('green')) return 'hover:text-green-600';
    if (backgroundColor.includes('blue')) return 'hover:text-blue-600';
    if (backgroundColor.includes('purple')) return 'hover:text-purple-600';
    return 'hover:text-blue-600';
  };

  return (
    <section className={`section-padding ${backgroundColor}`}>
      <div className="container-max text-center">
        <h2 className={`text-4xl font-bold ${textColor} mb-6`}>{title}</h2>
        <p className={`text-xl mb-8 max-w-3xl mx-auto ${textColor.replace('text-white', 'text-blue-100').replace('text-gray-900', 'text-gray-600')}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className={`${primaryButtonBg} ${getButtonTextColor()} hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg`}
          >
            {primaryButtonText}
          </Link>
          <Link 
            href="/contact" 
            className={`bg-transparent border-2 ${secondaryButtonBorder} ${textColor} hover:bg-white ${getHoverButtonColor()} font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg`}
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}