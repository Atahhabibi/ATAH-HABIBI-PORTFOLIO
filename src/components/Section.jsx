import styled from "styled-components";
import { MainTitle } from ".";

const AboutSection = () => {
  return (
    <Wrapper id="ABOUT">
      <div className="section-center">
        <MainTitle mainTitle="about me" sectionTitle="ABOUT" />

        
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  padding: 2rem 0;
  background: #06022c33;
  position: relative;




`;

export default AboutSection;
