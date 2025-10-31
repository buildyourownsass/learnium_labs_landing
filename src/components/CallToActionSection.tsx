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
  // Check if backgroundColor is a CSS custom property
  const isCustomProperty = backgroundColor.startsWith('var(');
  
  // Extract color for dynamic styling - handle both CSS vars and Tailwind classes
  const getButtonTextColor = () => {
    if (isCustomProperty) return 'text-white'; // Use white text for dark primary background
    if (backgroundColor.includes('orange')) return 'text-orange-600';
    if (backgroundColor.includes('green')) return 'text-green-600';
    if (backgroundColor.includes('blue')) return 'text-blue-600';
    if (backgroundColor.includes('purple')) return 'text-purple-600';
    return 'text-blue-600';
  };

  const getPrimaryButtonClasses = () => {
    if (isCustomProperty) {
      // btn-primary already has padding, font-weight, etc.
      return `btn-primary ${getButtonTextColor()} hover:opacity-90 transition-all duration-200 text-lg`;
    }
    return `${primaryButtonBg} ${getButtonTextColor()} hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-lg`;
  };

  const getSecondaryButtonBorder = () => {
    if (isCustomProperty) return 'border-primary'; // Use primary border color
    return secondaryButtonBorder;
  };

  const getSectionTextColor = () => {
    if (isCustomProperty) return 'text-gray-800'; // Use dark text on light background
    return textColor;
  };

  // Handle both CSS custom properties and Tailwind classes
  const sectionStyle = !isCustomProperty ? { backgroundColor } : {};
  const sectionClassName = isCustomProperty ? 'section-padding section-accent' : `section-padding ${backgroundColor}`;

  return (
    <section className={sectionClassName} style={sectionStyle}>
      <div className="container-max text-center">
        <h2 className={`text-4xl font-bold ${getSectionTextColor()} mb-6`}>{title}</h2>
        <p className={`text-xl mb-8 max-w-3xl mx-auto ${isCustomProperty ? 'text-gray-600' : textColor.replace('text-white', 'text-blue-100').replace('text-gray-900', 'text-gray-600')}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className={getPrimaryButtonClasses()}
          >
            {primaryButtonText}
          </Link>
          <Link 
            href="/contact" 
            className={`bg-transparent border-2 ${getSecondaryButtonBorder()} ${getSectionTextColor()} hover:bg-primary hover:text-white hover:border-primary font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-lg`}
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}