import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ProgramHero from '../../../components/ProgramHero';
import ProgramOverview from '../../../components/ProgramOverview';
import ProgramHighlights from '../../../components/ProgramHighlights';
import IdealForSection from '../../../components/IdealForSection';
import CallToActionSection from '../../../components/CallToActionSection';
import { advanceProgramData } from '../../../data/advance';

export default function AdvancePage() {
  return (
    <>
      <Navigation />
      
      <ProgramHero {...advanceProgramData.hero} />

      <ProgramOverview {...advanceProgramData.overview} />

      <ProgramHighlights highlights={advanceProgramData.highlights} />

      <IdealForSection 
        items={advanceProgramData.idealFor}
        bgColor="bg-blue-50"
        textColor="text-blue-900"
        columns={4}
      />

      <CallToActionSection {...advanceProgramData.callToAction} />

      <Footer />
    </>
  );
}