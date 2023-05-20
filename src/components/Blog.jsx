import styled from "styled-components";
import { RiLiveLine } from "react-icons/ri";
import { ImGithub } from "react-icons/im";

const Blog = () => {
  return (
    <Wrapper>
      <a className="blog-img-container" href="#">
        <h5 className="date">
          April <br /> 30 <br /> 2023
        </h5>
        <img
          src="https://atah-habibi-porfolio.netlify.app/images/java-complex/noku.png"
          alt=""
          className="img blog-img"
        />
      </a>

      <div className="info-blog-container">
        <div className="info-title">
          <h4>What designer can do</h4>
          <p>Javascript & react</p>
        </div>

        <div className="blog-icons">
          <a href="">
            <ImGithub />
          </a>
          <a href="">
            <RiLiveLine />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: rgba(226, 218, 218, 0.05);
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom:2rem;
  margin-right:2rem;

  .blog-img {
    margin-bottom: 1rem;
    min-width: 300px;
    width: 100%;
    height: 100%;
    background: rgba(226, 218, 218, 0.05);
    cursor: pointer;
    transition:all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.3);
    }
  }

  .info-title {

    h4{
        font-size:1.2rem;
    }
    font-size:1rem;
  }

  .blog-img-container {
    position: relative;
    overflow: hidden;
    display: block;
  }

  .date {
    position: absolute;
    top: 5%;
    right: 5%;
    background: var(--primary-100);
    color: black;
    text-align: center;
    font-size: 1.2rem;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-weight: 600;
    z-index: 22;
  }

  .info-blog-container {
    display: flex;
    justify-content: space-between;
    padding:1rem;
    align-items: center;

    .blog-icons {
      display: flex;
      justify-content: space-between;
      column-gap: 1rem;

      a {
        width: 2rem;
        height:2rem;
        display: block;
      }

      svg {
        width: 100%;
        height: 100%;
        color: #ac5e3a;
        transition: all 0.3 ease;
        &:hover {
          color: lightgreen;
        }
      }
    }
  }

  @media screen and (min-width:720px){
    margin-bottom:0;
    
  }





`;

export default Blog;
