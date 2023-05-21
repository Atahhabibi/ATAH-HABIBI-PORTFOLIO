import styled from "styled-components";
import { useState } from "react";
import { RiLiveLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

const MainBlogView = () => {
  return (
    <Wrapper>
      <img
        src="https://atah-habibi-porfolio.netlify.app/images/java-complex/atah-screen.png"
        alt=""
        className="main-img"
      />

      <div className="main-blog-info">
        <div className="title">
          <h2>Cocktail Api</h2>
          <h5>javascript and react</h5>
        </div>

        <div className="main-icons">
          <a href="#">
            <span>
              <AiFillGithub />
            </span>
            source code
          </a>
          <a href="#">
            <span>
              <RiLiveLine />
            </span>
            preview live
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-height: 40rem;
  max-width: 50rem;
  margin-bottom: 2rem;
  border: 1px solid grey;
  padding: 2rem;
  border-radius: 8px;
  background: #000000;

  .main-img{
      max-height:30rem;
      max-width:45rem;
      border:1px solid white;

    
  }



  .main-blog-info {
    padding: 1rem;
    padding-top:2rem;
    display: flex;
    justify-content: space-between;

    .title {
      letter-spacing: 3px;

      h2{
        text-transform: uppercase;

      }

      h5{
          color: white;
      }
    }

  

    a {
      display: block;
      color: #9299c2;
      font-size: 1.3rem;
      text-transform: uppercase;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      display:flex;

      &:hover {
        color: white;
      }

      span {
        margin-right: 1rem;
        display: inline-block;
        font-size: 1.8rem;
        color: orange;
      }
    }
  }
`;

export default MainBlogView;
