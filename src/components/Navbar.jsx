import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { tabs } from "../utils/tabs";
import atahLogo from '../images/atahhabibiLogo.png'

const Navbar = () => {
  return (
    <Wrapper className="section-center">
      <div className="nav-heading">
        <a href="#home" className="name">
          <img src={atahLogo} alt="" className="img logo-img" />
        </a>

        <button className="toggle-btn btn btn-1">
          <FaBars />
        </button>
      </div>

      <div className="links">
        {tabs.map((tab) => {
          return (
            <button key={tab.id} className="link">
              <a href={`#${tab.name}`}>
                <span className="num">{tab.id}. </span>
                {tab.name}
              </a>
            </button>
          );
        })}
      </div>

      <a className="btn btn-1 hire-btn">HIRE ME</a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 0;


  .name{
    font-size:1.5rem;
    color: #13ad53;
    font-weight: 600;
    transition: var(--transition);

    .logo-img{
      width:15rem;
      height:3rem;
    }

    


    &:hover{
      color: white;
    }
  }



  .links {
    display: none;
  }

  .hire-btn {
    display: none;
  }

  .nav-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .toggle-btn {
      display: none;
    }

    .hire-btn {
      display: block;
      font-weight: 400;
      padding: 0.6rem 1rem !important;
    }

    .links {
      display: flex;
      column-gap: 0.5rem;
      transition: all 1s ease-in;

      .link {
        background: transparent;
        border: none;
        flex: 1 1 auto;
        margin: 10px;
        text-align: center;
        text-transform: uppercase;
        position: relative;
        transition: 0.3s;

        &:after {
          position: absolute;
          transition: 0.3s;
          content: "";
          width: 0;
          left: 50%;
          bottom: -0.5rem;
          height: 1px;
          background: #13ad53;
        }

        &:hover {
          cursor: pointer;

          &:after {
            width: 100%;
            left: 0;
          }
        }
      }

      .link a {
        display: inline-block;
        color: white;
        font-size: 0.9rem;
        font-weight: 500;
      }

      .num {
        color: var(--primary-100);
        font-weight: 600;
      }
    }

    .hire-btn {
      padding: 0.3rem;
      font-size: 1rem;
    }
  }
`;

export default Navbar;
