import Hero from '../sections/hero';
import HeroInstructors from '../sections/heroInstructors';
import HeroCourses from '../sections/heroCourses';
import HeroPricing from '../sections/heroPricing';
import HeroAcademy from '../sections/heroAcademy';

// Map Strapi sections to section components
const sectionComponents = {
  'sections.hero': Hero,
  'sections.hero-instructors': HeroInstructors,
  'sections.hero-courses': HeroCourses,
  'sections.hero-pricing': HeroPricing,
  'sections.hero-academy': HeroAcademy,
};

// Display a section individually
const Section = ({ sectionData }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  // Display the section
  return <SectionComponent data={sectionData} />;
};

// Display the list of sections
const Sections = ({ sections }) => {
  return (
    <>
      {sections.map((section) => (
        <Section sectionData={section} key={`${section.__component}${section.id}`} />
      ))}
    </>
  );
};

export default Sections;
