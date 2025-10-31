import Image from 'next/image';
import Link from 'next/link';

interface ProgramHeroProps {
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  iconSvg: React.ReactNode;
  backgroundImage: string;
  primaryColor: string;
  decorativeColors: {
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
  primaryColor,
  decorativeColors,
  buttonText = "Enroll Now"
}: ProgramHeroProps) {
  // Get text color based on primary color
  const getTextColor = () => {
    if (primaryColor.includes('orange')) return 'text-orange-600';
    if (primaryColor.includes('green')) return 'text-green-600';
    if (primaryColor.includes('blue')) return 'text-blue-600';
    if (primaryColor.includes('purple')) return 'text-purple-600';
    return 'text-blue-600';
  };

  return (
    <section className="min-h-screen gradient-bg flex items-center pt-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={`${title} program illustration`}
          fill
          className="object-cover opacity-15"
          priority
        />
      </div>
      
      {/* Background decorative elements */}
      <div className={`absolute top-20 right-10 w-32 h-32 ${decorativeColors.primary} rounded-full opacity-30 animate-pulse`}></div>
      <div className={`absolute bottom-20 left-10 w-40 h-40 ${decorativeColors.secondary} rounded-full opacity-20 animate-pulse`} style={{animationDelay: '1s'}}></div>
      <div className={`absolute top-1/3 left-1/4 w-24 h-24 ${decorativeColors.tertiary} rounded-full opacity-25 animate-pulse`} style={{animationDelay: '2s'}}></div>
      
      <div className="container-max section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`w-24 h-24 ${primaryColor} rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg`}>
            {iconSvg}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          <p className={`text-2xl font-semibold mb-6 ${getTextColor()}`}>
            {subtitle}
          </p>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {tagline}
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            {description}
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}