import Image from 'next/image';
import Link from 'next/link';

interface ProgramHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  imageSrc?: string;
  decorativeElements?: string[];
  // Legacy props for backward compatibility
  tagline?: string;
  iconSvg?: React.ReactNode;
  backgroundImage?: string;
  primaryColor?: string;
  decorativeColors?: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  buttonText?: string;
}

export default function ProgramHero({
  title,
  subtitle,
  tagline,
  description,
  iconSvg,
  backgroundImage,
  imageSrc,
  primaryColor = "bg-blue-100",
  decorativeColors,
  decorativeElements,
  buttonText,
  primaryButtonText = "Enroll Now",
  secondaryButtonText = "Learn More"
}: ProgramHeroProps) {
  // Use new or legacy props
  const heroImage = imageSrc || backgroundImage || "/images/hero-main.svg";
  const mainButton = primaryButtonText || buttonText || "Enroll Now";
  
  // Get text color based on primary color
  const getTextColor = () => {
    if (primaryColor.includes('orange')) return 'text-orange-600';
    if (primaryColor.includes('green')) return 'text-green-600';
    if (primaryColor.includes('blue')) return 'text-blue-600';
    if (primaryColor.includes('purple')) return 'text-purple-600';
    return 'text-blue-600';
  };

  // Default decorative colors if not provided
  const defaultDecorative = {
    primary: "bg-blue-100",
    secondary: "bg-indigo-100", 
    tertiary: "bg-purple-100"
  };

  const colors = decorativeColors || defaultDecorative;

  return (
    <section className="min-h-screen gradient-bg-2 flex items-center pt-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={`${title} program illustration`}
          fill
          className="object-cover opacity-15"
          priority
        />
      </div>
      
      {/* Background decorative elements */}
      <div className={`absolute top-20 right-10 w-32 h-32 ${colors.primary} rounded-full opacity-30 animate-pulse`}></div>
      <div className={`absolute bottom-20 left-10 w-40 h-40 ${colors.secondary} rounded-full opacity-20 animate-pulse`} style={{animationDelay: '1s'}}></div>
      <div className={`absolute top-1/3 left-1/4 w-24 h-24 ${colors.tertiary} rounded-full opacity-25 animate-pulse`} style={{animationDelay: '2s'}}></div>
      
      <div className="container-max section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon or decorative elements */}
          {iconSvg && (
            <div className={`w-24 h-24 ${primaryColor} rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg`}>
              {iconSvg}
            </div>
          )}
          
          {/* New style decorative elements */}
          {decorativeElements && decorativeElements.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {decorativeElements.map((element, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-white/30"
                >
                  {element}
                </span>
              ))}
            </div>
          )}
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className={`text-2xl font-semibold mb-6 ${getTextColor()}`}>
            {subtitle}
          </p>
          {tagline && (
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {tagline}
            </p>
          )}
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              {mainButton}
            </Link>
            {secondaryButtonText && (
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}