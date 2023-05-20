import styled from "styled-components";
import { MainTitle } from ".";
import Work from "./Work";

const WorksSection = () => {
  return (
    <Wrapper id="WORKS">
      <div className="section-center">
        <MainTitle mainTitle="My works" sectionTitle="Works" />

        <div className="work-btn-container">
          <button className="work-btn">All</button>
          <button className="work-btn">REACT</button>
          <button className="work-btn">HTML/CSS</button>
          <button className="work-btn">JAVACRIPT</button>
        </div>

        <div className="works-container">
          <Work/>
          <Work/>
          <Work/>
          <Work/>
          <Work/>
          <Work/>
          <Work/>
          <Work/>
        </div>

        <button className="btn btn-2 load-btn">load more</button>

        
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 0;
  background: #06022c33;
  position: relative;

  .work-btn-container{
    text-align: center;
    .work-btn{
      font-weight:600;
      border:3px solid #000000bd;
      background:#8c3c3c;
      color: white;
      font-size:0.8rem;
    }
  }

  .works-container{
    display: grid;
    justify-items: center;
    gap:1.3rem;
    margin-top:2rem;
  }

  .load-btn{
    margin: 0 auto;
    margin-top:2rem;
    margin-bottom:2rem;
    font-weight: normal;
    font-size:0.8rem;
    /* background:var(--primary-100); */
  }


  @media screen and (min-width:700px) {
    min-height:100vh;

    .work-btn-container{
      .work-btn{
        font-size:1rem;
      }
    }

    .load-btn{
      font-size:1rem;
    }

    .works-container{
      grid-template-columns: 1fr 1fr;
    }
      
  }
  @media screen and (min-width:1100px) {

    .works-container{
      grid-template-columns: 1fr 1fr 1fr;
    }
      
  }
  



`;

export default WorksSection;
