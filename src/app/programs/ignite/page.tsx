import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ProgramHero from '../../../components/ProgramHero';
import ProgramOverview from '../../../components/ProgramOverview';
import ProgramHighlights from '../../../components/ProgramHighlights';
import IdealForSection from '../../../components/IdealForSection';
import CallToActionSection from '../../../components/CallToActionSection';
import { igniteProgramData } from '../../../data/ignite';

export default function IgnitePage() {
  return (
    <>
      <Navigation />
      
      <ProgramHero {...igniteProgramData.hero} />

      <ProgramOverview {...igniteProgramData.overview} />

      <ProgramHighlights highlights={igniteProgramData.highlights} />

      <IdealForSection 
        items={igniteProgramData.idealFor}
        bgColor="bg-orange-50"
        textColor="text-orange-900"
      />

      <CallToActionSection {...igniteProgramData.callToAction} />

      <Footer />
    </>
  );
}