import styled from "styled-components";
import { MainTitle } from ".";
import reduxIcon from '../images/html-icon.png'

const Skills = () => {
  return (
    <Wrapper id="ABOUT">
      <div className="section-center">
        <MainTitle mainTitle="my skills" sectionTitle="skills" />
        <img src={reduxIcon} alt="" />

        
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  padding: 2rem 0;
  background: #0000004c;
  position: relative;
`;

export default Skills;
