import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ProgramHero from '../../../components/ProgramHero';
import ProgramOverview from '../../../components/ProgramOverview';
import ProgramHighlights from '../../../components/ProgramHighlights';
import IdealForSection from '../../../components/IdealForSection';
import CallToActionSection from '../../../components/CallToActionSection';
import { empowerProgramData } from '../../../data/empower';

export default function EmpowerPage() {
  return (
    <>
      <Navigation />
      
      <ProgramHero {...empowerProgramData.hero} />

      <ProgramOverview {...empowerProgramData.overview} />

      <ProgramHighlights highlights={empowerProgramData.highlights} />

      <IdealForSection 
        items={empowerProgramData.idealFor}
        bgColor="bg-purple-50"
        textColor="text-purple-900"
      />

      <CallToActionSection {...empowerProgramData.callToAction} />

      <Footer />
    </>
  );
}