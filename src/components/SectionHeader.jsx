export function SectionHeader(prop) {
  return (
    <header className={`${prop.headerClassname} mx-auto`}>
      <p className="text-primary-main text-[16px] leading-4.5 font-semibold -tracking-wide text-center">
        {prop.subHeading}
      </p>
      <h2
        className={`mt-6 text-5xl ${prop.headingClassname} text-neutral leading-11 -tracking-wide font-medium text-center`}
      >
        {prop.heading}
      </h2>
      <p
        className={`mt-6 ${prop.descriptionClassname} leading-4.5 font-normal -tracking-wide text-center`}
      >
        {prop.description}
      </p>
    </header>
  );
}
