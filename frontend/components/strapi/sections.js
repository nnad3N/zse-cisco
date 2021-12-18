import PropTypes from 'prop-types';
import Hero from '@sections/Hero/Hero';
import HeroInstructors from '@sections/HeroInstructors/HeroInstructors';
import HeroCourses from '@sections/HeroCourses/HeroCourses';
import HeroPricing from '@sections/HeroPricing/HeroPricing';
import HeroAbout from '@sections/HeroAcademy/HeroAbout';
import Contact from '@sections/Contact/Contact';
import Regulations from '@sections/Regulations/Regulations';
import Pricing from '@sections/Pricing/Pricing';
import Courses from '@sections/Courses/Courses';
import CiscoCourse from '@sections/CiscoCourse/CiscoCourse';
import SectionWithImage from '@sections/SectionWithImage/SectionWithImage';
import SectionWithDesc from '@sections/SectionWithDesc/SectionWithDesc';
import SectionHeader from '@sections/SectionHeader/SectionHeader';
import SectionTextHeader from '@sections/SectionTextHeader/SectionTextHeader';
import SectionWithList from '@sections/SectionWithList/SectionWithList';
import Rodo from '@sections/Rodo/Rodo';

// Map Strapi sections to section components
const sectionComponents = {
  'sections.hero': Hero,
  'sections.hero-instructors': HeroInstructors,
  'sections.hero-courses': HeroCourses,
  'sections.hero-pricing': HeroPricing,
  'sections.hero-about': HeroAbout,
  'sections.contact': Contact,
  'sections.regulations': Regulations,
  'sections.pricing': Pricing,
  'sections.courses': Courses,
  'sections.cisco-course': CiscoCourse,
  'sections.section-with-image': SectionWithImage,
  'sections.section-with-desc': SectionWithDesc,
  'sections.section-header': SectionHeader,
  'sections.section-text-header': SectionTextHeader,
  'sections.section-with-list': SectionWithList,
  'sections.rodo': Rodo,
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

Sections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sections.defaultProps = {
  sections: [],
};

// Display a section individually
const Section = ({ sectionData }) => {
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  return <SectionComponent data={sectionData} />;
};

Section.propTypes = {
  sectionData: PropTypes.object.isRequired,
};

Section.defaultProps = {
  sectionData: {
    __component: '',
  },
};

export default Sections;
