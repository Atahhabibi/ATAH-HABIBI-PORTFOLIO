import styled from "styled-components";
import atah_1 from "../images/atah1.jpg";
import { Typewriter } from "react-simple-typewriter";
import scrollDownIcon from '../images/mouse-icon.png'

const HeroSection = () => {
  return (
    <Wrapper id="HOME">
      <div className="home-center">
        <div className="image-container">
          <img src={atah_1} alt="atah-img" className="img person-img" />
        </div>

        <div className="info-container">
          <h4
            style={{
              paddingTop: "1rem",
              margin: "auto 0",
              fontWeight: "bold",
              color: "white",
              fontSize: "2rem"
            }}
            className="title"
          >
            Hi, I am {"  "}
            <br />
            <span style={{ color: "#72e2ae", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Atah ur Rahman",
                  "Front-End Developer",
                  "Web designer"
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h4>

          <p className="text">
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </p>
          <ul className="social">
            <li className="btn btn-1">
              <i className="fa fa-facebook"></i>
            </li>
            <li className="btn btn-1">
              <i className="fa fa-instagram"></i>
            </li>
            <li className="btn btn-1">
              <i className="fa fa-github"></i>
            </li>
            <li className="btn btn-1">
              <i className="fa fa-twitter"></i>
            </li>
            <li className="btn btn-1">
              <i className="fa fa-linkedin"></i>
            </li>
          </ul>

        <button className="scroll-btn">
          <a href="#ABOUT"><img src={scrollDownIcon} alt="" /><br/></a>
        </button>

        </div>

      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  display: grid;
  place-items: center;

  .image-container {
    border-radius: 50%;
    overflow: hidden;
    height: 10rem;
    width: 10rem;
    border: 5px solid var(--primary-100);
    margin: 0 auto;
  }

  .scroll-btn {
    background: transparent;
    border: none;
    position: absolute;
    bottom: 4%;
    left: 50%;
    margin: 0 auto;

    animation: downAnimate 1s linear infinite;

    @keyframes downAnimate {
      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(30%);
      }

      100% {
        transform: translateY(0);
      }
    }
  }

  .info-container {
    color: white;
    font-weight: 600;
    margin-top: 1rem;
    text-align: center;
    max-width: 20rem;

    h4 {
      font-weight: 600;
    }

    .text {
      margin-top: 1rem;
      font-size: 1rem;
      max-width: 30rem;
    }
  }

  .social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 17rem;
    margin: 0 auto;
    margin-top: 2rem;

    li {
      color: rgba(210, 231, 207, 0.947);
      list-style-type: none;
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 50px;
      padding: 1%;
      border: 1px solid rgba(201, 191, 191, 0.6);
      cursor: pointer;
      margin-left: 10px;
      margin-bottom: 20px;
      transition: ease 0.3s;
      font-size: 1.5rem;
      display: grid;
      place-items: center;
      background-color: #00000031;

      &:hover {
        color: #0b0601;
        background-color: var(--primary-100);
      }
    }

    .social:hover > li {
      opacity: 0.5;
    }

    .social:hover > li:hover {
      opacity: 1;
    }
  }

  @media screen and (min-width: 600px) {
    .info-container {
      max-width: 50rem;
      .title {
        font-size: 2.5rem !important;
      }
    }
    br {
      display: none;
    }

    .text {
      max-width: 35rem !important;
    }
  }

  @media screen and (min-width: 800px) {
    .text {
      max-width: 50rem !important;
    }
  }
`;

export default HeroSection;
