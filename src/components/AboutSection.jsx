import styled from "styled-components";
import { MainTitle } from ".";
import about_img from "../images/atah-2.jpg";
import "./Style.css";
import resume from "../utils/atah-habibi-full-stack.pdf";


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
              Aspiring Software Engineer with a solution-focused mindset and
              skills in creating robust, scalable, and intuitive applications
              that deliver seamless user experiences. Skilled in front-end and
              back-end development, with expertise in React, Node.js,
              Express.js, MongoDB, and RESTful APIs to build high-performing,
              user-centric solutions. Experienced in user authentication (JWT),
              state management (Redux Toolkit), and responsive design using CSS,
              SCSS, Tailwind CSS, and Styled Components. Capable of implementing
              role-based access control to ensure security and scalability
              across different user levels. Passionate about collaborating
              across teams, optimizing performance, and applying best practices
              in UI/UX design. Adaptable and driven by a strong work ethic,
              committed to solving complex challenges and producing high-quality
              code.
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
