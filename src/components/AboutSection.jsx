import styled from "styled-components";
import { MainTitle } from ".";
import about_img from "../images/atah-2.jpg";
import "./Style.css";

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
            <h1>Atah ur Rahman Habibi</h1>
            <p>
              I'm Atah Ur Rahman Habibi born in Afganistan and grow up in India
              , I have completed three years of my associate degree in computer
              science at grossmont and cuymaca college and got my associate
              degree and I am getting transfer to SDSU in coming august 2023.
              I'm a front-end web developer having great skill at fron-end
              programs such HTML, CSS , Javascript and React.js , passionate
              about solving problems with Websites and creating different
              solutions. Stay free to know a little more about my life, follow
              me on my networks where I share a little more about myself. I love
              to make new friends and learn new things. I love being with my
              family and friends, they are everything to me.I love to travel and
              get to know new places and cultures.
            </p>

            <a href="#" className="btn btn-2 about-btn">Download Resume</a>

        
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

  .info-container{
      margin:2rem 0;
      padding:0.5rem;
  }

  .about-img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-radius: 1rem;
    display: none;
  }

  .img-container{
    display: none;
  }

 .about-btn{
     color:white;
     border:1px solid grey;
     margin-top:1rem;
     &:hover{
         color:white;
         background:green;
         letter-spacing:1px;
     }
 }

  .text {
    text-align: justify;
    padding:0 0.3rem ;

    h1 {
      margin: 1rem 0;
      text-align: center;
      font-size:2.3rem;
      letter-spacing:1px;
      font-weight: 600;
    }
    p {
      color: white;
      font-size: 1.2rem;
    }
  }


  @media screen and (min-width:700px) {

    .info-container{
      margin-top:-1rem;

      .about-img{
        display: block;
      }
    }

   .img-container{
     display: block;
   }
      
  }
  

  @media screen and (min-width: 1100px) {
    .info-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      align-items:center;
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
