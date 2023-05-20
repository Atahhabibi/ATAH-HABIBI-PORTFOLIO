import styled from "styled-components";
import { MainTitle } from ".";
import Blog from "./Blog";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AsNavFor from "./AsNavFor";

const BlogsSection = () => {
  return (
    <Wrapper id="BLOGS">
      <div className="section-center">
        <MainTitle mainTitle=" Blogs" sectionTitle="BLOGS" />

        <div className="blogs-container">
          <Blog />
          <Blog />
          <Blog />
          <Blog />

          <button className="btn btn-2 load-blog ">Load more</button>
        </div>

        <div className="auto-play-container">
          <AsNavFor/>
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
    font-size: 30px;
    line-height: 1;
    opacity: 0.75;
    color: #086140;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .load-blog {
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: normal;
    font-size: 0.8rem;
  }

  .auto-play-container {
    display: none;
  }

  @media screen and (min-width:600px) {

    .blogs-container{
      display: grid;
      grid-template-columns:1fr 1fr;
    }
      
  }
  

  @media screen and (min-width: 900px) {
    .auto-play-container {
      display: block;
    }

    .blogs-container {
      display: none;
    }
  }
`;

export default BlogsSection;
