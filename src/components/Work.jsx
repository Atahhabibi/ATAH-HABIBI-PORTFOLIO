import styled from "styled-components";
import githubUrl from '../images/programmingIcons/github1.png'
import liveUrl from '../images/programmingIcons/live.png'
import {RiLiveLine} from 'react-icons/ri'
import {ImGithub} from 'react-icons/im'


const Work = () => {
  return (
    <Wrapper>
      
      <div className="work-container">

        <div className="single-img-container">
          <span>
            <a href=""><ImGithub/></a>
            <a href=""><RiLiveLine/></a>
          </span>
          <img
            src="https://tf-react-bieber.vercel.app/images/portfolios/portfolio-image-19.jpg"
            alt=""
            className="img work-img"
          />
        </div>
        <h4 className="work-name">Candle</h4>
        <p>Creative Candle Light</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  .work-container {
    min-width:300px;
    border: 1px solid grey;
    padding: 1.25rem;
    background: rgba(226, 218, 218, 0.05);
    border-radius: 0.5rem;
  }

  .single-img-container {
    position: relative;
    overflow: hidden;

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 95%;
      background: rgba(0, 0, 0, 0.8);
      transition: all 0.5s ease-in;
      transform: translate(-100%);
      cursor: pointer;
      display: block;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap:1rem;
      backdrop-filter:blur(4px);
      
  
      a {
        width:2rem;
        height:2rem;
        display: block;
        background:green;
        padding:0.8rem;
        border-radius:50%;
        transition: all 0.3s ease-in;

        &:hover{
            background-color:#8c3c3c;
        }

        svg {
          width: 100%;
          height: 100%;
          color: white;
        }
      }
    }

    &:hover {
        position: relative;
      span {
        transform: translate(0);
      }
    }
  }

  .work-img {
    margin-bottom: 1rem;
  }


 @media screen and (min-width:600px) {
     .work-container{
         margin-bottom:0;
     }
     
     .single-img-container{
         span{

            a{
                width:4rem;
                height:4rem;
            }
         }
     }
 }
 
`;

export default Work;
