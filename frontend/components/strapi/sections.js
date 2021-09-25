import Text from '@sections/text';

// Map Strapi sections to section components
const sectionComponents = {
  'sections.hero': Hero,
  'sections.instructors': Instructors,
  'sections.courses': Courses,
  'sections.hero-pricing': HeroPricing,
  'sections.posibilities': Posibilities,
};

// Display a section individually
const Section = ({ sectionData }) => {
  // Prepare the component
  const Content = sectionComponents[sectionData.__component];

  if (!Content) {
    return null;
  }

  // Display the section
  return <Content data={sectionData} />;
};

// Display the list of sections
const Sections = ({ sections }) => {
  return (
    <div className="flex flex-col">
      {sections.map((section) => (
        <Section sectionData={section} key={`${section.__component}${section.id}`} />
      ))}
    </div>
  );
};

export default Sections;
