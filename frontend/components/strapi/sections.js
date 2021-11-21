import PropTypes from 'prop-types';
import Hero from '@sections/Hero/Hero';
import HeroInstructors from '@sections/HeroInstructors/HeroInstructors';
import HeroCourses from '@sections/HeroCourses/HeroCourses';
import HeroPricing from '@sections/HeroPricing/HeroPricing';
import HeroAcademy from '@sections/HeroAcademy/HeroAcademy';
import Contact from '@sections/Contact/Contact';
import Regulations from '@sections/Regulations/Regulations';
import Pricing from '@sections/Pricing/Pricing';
import Offert from '@sections/Offert/Offert';
import CiscoCourse from '@sections/CiscoCourse/CiscoCourse';

// Map Strapi sections to section components
const sectionComponents = {
  'sections.hero': Hero,
  'sections.hero-instructors': HeroInstructors,
  'sections.hero-courses': HeroCourses,
  'sections.hero-pricing': HeroPricing,
  'sections.hero-academy': HeroAcademy,
  'sections.contact': Contact,
  'sections.regulations': Regulations,
  'sections.pricing': Pricing,
  'sections.offert': Offert,
  'sections.cisco-course': CiscoCourse,
};

// Display a section individually
const Section = ({ sectionData }) => {
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

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

Section.propTypes = {
  sectionData: PropTypes.object.isRequired,
};

Sections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Section.defaultProps = {
  sectionData: {
    __component: '',
  },
};

Sections.defaultProps = {
  sections: [],
};

export default Sections;
