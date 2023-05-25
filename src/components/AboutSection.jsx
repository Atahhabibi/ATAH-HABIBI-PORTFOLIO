import styled from "styled-components";
import { MainTitle } from ".";
import about_img from "../images/atah-2.jpg";
import "./Style.css";
import resume from "../utils/AtahResume.pdf";


const AboutSection = () => {
  return (
    <Wrapper id="ABOUT">
      <div className="section-center">
        <MainTitle mainTitle="about me" sectionTitle="ABOUT" />

        <div className="info-container">
          <div className="img-container">
            <img src={about_img} alt="" className="about-img img" />
          </div>

          <div className="text">
            <h1>Atah Habibi</h1>
            <p>
              I'm Atah Ur Rahman Habibi born in Afghanistan and grow up in India
              , I have completed three years of my associate degree in computer
              science at Grossmont and Cuyamaca college and got my associate
              degree and I'm a front-end web developer having great skill at
              front-end programs such HTML, CSS , JavaScript and React.js ,
              passionate about solving problems with Websites and creating
              different solutions. Resourceful Front End Web Developer bringing
              in-depth knowledge of latest technology trends to produce clean
              website design. Experience handling complex HTML and CSS coding,
              design and extensions to meet organization's front-facing internet
              needs. Detail-oriented collaboration with others to define project
              expectations and demand. Hands-on testing and debugging.to address
              inconsistencies and maintain performance thresholds. 
            </p>

            <a href={resume} className="btn btn-2 about-btn" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: rgba(1, 14, 2, 0.4);
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  min-height: 100vh;


  .info-container {
    margin: 2rem 0;
    padding: 0.5rem;
    margin-top: 0;
  }

  .about-img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 1rem;
    display: none;
  }

  .img-container {
    display: none;
  }

  .about-btn {
    color: white;
    border: 1px solid grey;
    margin-top: 1rem;
    &:hover {
      color: white;
      background: green;
      letter-spacing: 1px;
    }
  }

  .text {
    text-align: justify;
    padding: 0 0.3rem;

    h1 {
      margin: 1rem 0;
      text-align: center;
      font-size: 2rem;
      letter-spacing: 1px;
      font-weight: 600;
    }
    p {
      color: white;
      font-size: 0.9rem;
      margin-bottom: 3rem;
    }
  }

  @media screen and (min-width: 700px) {
    .info-container {
      margin-top: -1rem;

      .text {
        p {
          font-size: 1.3rem;
        }
      }

      .about-img {
        display: block;
      }
    }

    .img-container {
      display: block;
    }
  }

  @media screen and (min-width: 1100px) {
    .info-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      align-items: center;
      margin-top: -2rem;

      .text {
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 1.3rem;
          text-align: justify;
        }
      }
    }
  }
`;

export default AboutSection;
