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
              I am Atah Ur Rahman Habibi, a highly skilled and dedicated
              front-end developer. I have completed three years of my associate
              degree in computer science at Grossmont and Cuyamaca College,
              where I gained expertise in HTML, CSS, JavaScript, and React.js. I
              am also deeply interested in learning and implementing
              cutting-edge programming and development technologies to stay at
              the forefront of the industry. As a resourceful front-end web
              developer, I stay up to date with the latest technology trends to
              ensure I deliver clean and modern website designs. I have
              experience handling complex HTML and CSS coding, designing
              interfaces, and implementing extensions to meet the front-facing
              internet needs of organizations. Additionally, I am proficient in
              testing and debugging to ensure consistent performance and address
              any inconsistencies. In addition to my front-end development
              skills, I am also a proficient mobile app developer. I have a
              strong passion for creating innovative and user-friendly
              applications.
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
