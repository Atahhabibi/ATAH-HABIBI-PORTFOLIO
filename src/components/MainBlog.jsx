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
  background: rgba(226, 218, 218, 0.05);

  .main-img{
      max-height:30rem;
      max-width:45rem;
    
  }



  .main-blog-info {
    padding: 0.8rem;
    display: flex;
    justify-content: space-between;

    .title {
      letter-spacing: 3px;

      h5{
          color: white;
      }
    }

  

    a {
      display: block;
      color: white;
      font-size: 1.3rem;
      text-transform: uppercase;
      color:#0d87ac;
      font-weight: 600;
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

      &:hover {
        color: white;
      }

      span {
        margin-right: 1rem;
        display: inline-block;
        font-size: 1.7rem;
      }
    }
  }
`;

export default MainBlogView;
