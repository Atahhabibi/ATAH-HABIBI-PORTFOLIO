import styled from "styled-components";
import { AutoPlay, MainTitle } from ".";
import Blog from "./Blog";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoPlay2 from "./AutoPlay2";

const BlogsSection = () => {
  return (
    <Wrapper id="BLOGS">
      <div className="section-center">
        <MainTitle mainTitle=" Blogs" sectionTitle="BLOGS" />

        <div className="blogs-container"></div>

        <div className="auto-play-container">
         <AutoPlay2/>
          <AutoPlay />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
  background: rgba(0, 3, 2, 0.2);

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size:30px;
    line-height: 1;
    opacity: 0.75;
    color: #086140;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  

  .auto-play-container {
    display: none;
  }

  @media screen and (min-width: 900px) {
    .auto-play-container {
      display: block;
    }
    .blogs-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
  @media screen and (min-width: 1000px) {
    .blogs-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
`;

export default BlogsSection;
