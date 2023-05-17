import styled from "styled-components";
import atah_2 from "../images/atah-img.jpg";
import { tabs } from "../utils/tabs";
import atahLogo from "../images/atahhabibiLogo.png";
import { AiFillCloseCircle } from "react-icons/ai";

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-header">
        <img src={atahLogo} alt="" className="img sidebar-logo" />
        <button className="close-btn">
          <AiFillCloseCircle />
        </button>
      </div>

      <hr />

      <div className="contents">
        <div className="sidebar-links">
          {tabs.map((tab) => {
            return (
              <button key={tab.id} className="sidebar-link btn btn-2">
                <a href={`#${tab.name}`}>
                  <span className="sideNum">{tab.id}. </span>
                  {tab.name}
                </a>
              </button>
            );
          })}
        </div>

        <div className="box-img">
          <img src={atah_2} alt="" className=" img sidebar-img" />
        </div>
      </div>

      <a className="btn btn-1 hire-btn sidebar-btn">HIRE ME</a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-600);
  transform: translateY(100%);
  transition: all 0.5s ease-in-out;
  /* transform: translateY(0); */
  max-width: 1000px;

  hr {
    width: 100%;
    padding: -2rem;
    margin-bottom: 0.5rem;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .sidebar-logo {
      width: 12rem;
    }

    .close-btn {
      font-size: 2rem;
      background-color: transparent;
      color: green;
      border: transparent;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.6);
      }
    }
  }

  .sidebar-btn {
    background: var(--primary-200);
    color: #e3c7c7;
    &:hover {
      background: #ab621f;
      color: white;
    }
  }

  .contents {
    display: grid;
    grid-template-columns: repeat(2, minmax(9rem, 1fr));
    grid-template-columns: 1, 5fr 2fr;
    column-gap: 2rem;
    margin-bottom: 1.2rem;
  }

  .sidebar-img {
    height: 40rem;
    object-fit: cover;
    border-radius: 10px;
    max-width: 440px;
  }

  .sidebar-links {
    display: grid;
    row-gap: 2rem;
    .sidebar-link {
      background-color: transparent;
      border: 1px solid white;
      padding: 0.5rem;
      letter-spacing: 2px;

      .sideNum {
        color: var(--primary-100);
      }

      &:hover a {
        color: white;
      }

      &:hover {
        background: #a4ab1f;
      }

      a {
        color: white;
        font-size: 0.8rem;
      }
    }
  }

  @media screen and (min-width: 570px) {
    hr {
      margin-bottom: 3rem;
    }
    .sidebar-links {
      .sidebar-link {
        a {
          color: white;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export default Sidebar;
