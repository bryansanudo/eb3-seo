const Section = ({ children, name }) => {
  return (
    <section
      name={name}
      className="min-h-fit  flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {children}
    </section>
  );
};

export default Section;
