import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ProgramHero from '../../../components/ProgramHero';
import ProgramOverview from '../../../components/ProgramOverview';
import ProgramHighlights from '../../../components/ProgramHighlights';
import IdealForSection from '../../../components/IdealForSection';
import CallToActionSection from '../../../components/CallToActionSection';
import { elevateProgramData } from '../../../data/elevate';

export default function ElevatePage() {
  return (
    <>
      <Navigation />
      
      <ProgramHero {...elevateProgramData.hero} />

      <ProgramOverview {...elevateProgramData.overview} />

      <ProgramHighlights highlights={elevateProgramData.highlights} />

      <IdealForSection 
        items={elevateProgramData.idealFor}
        bgColor="bg-green-50"
        textColor="text-green-900"
      />

      <CallToActionSection {...elevateProgramData.callToAction} />

      <Footer />
    </>
  );
}