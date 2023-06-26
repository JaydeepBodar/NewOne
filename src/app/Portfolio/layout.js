import React from "react";
import Container from "../../component/Container"

const layout = ({ children }) => {
  return (
    <section className="portfolio-section">
      <Container>
        <h2 className="text-5xl max-md:text-3xl font-bold pt-[60px]">Our Works</h2>
        {children}
      </Container>
    </section>
  );
};

export default layout;
