import styled from "styled-components";
import { MainTitle } from ".";
import "./Contact.css";

const ContactSection = () => {
  return (
    <Wrapper id="CONTACT">
      <div className="section-center">
        <MainTitle mainTitle="CONTACT Me" sectionTitle="contact" />

        <div className="contact_us_green">
          <div className="responsive-container-block big-container">
            <div className="responsive-container-block container">
              <div
                className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line"
                id="i69b-2"
              >
                <form
                  className="form-box"
                  action="https://formspree.io/f/xrgvdnoq"
                  method="POST"
                >
                  <div className="container-block form-wrapper">
                    <div className="head-text-box">
                      <p className="text-blk contactus-head">Contact Me</p>
                      <p className="text-blk contactus-subhead">
                        You are most welcome to contact me , if you have any
                        question, I will really appreciate for your time .
                      </p>
                    </div>
                    <div className="responsive-container-block">
                      <div
                        className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                        id="i10mt-6"
                      >
                        <p className="text-blk input-title">FIRST NAME</p>
                        <input
                          className="input"
                          id="ijowk-6"
                          name="FirstName"
                        />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">LAST NAME</p>
                        <input
                          className="input"
                          id="indfi-4"
                          name="Last Name"
                        />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">EMAIL</p>
                        <input className="input" id="ipmgh-6" name="Email" />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <p className="text-blk input-title">SUBJECT</p>
                        <input className="input" id="imgis-5" name="SUBJECT" />
                      </div>
                      <div
                        className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                        id="i634i-6"
                      >
                        <p className="text-blk input-title">
                          WRITE MESSAGE HERE
                        </p>
                        <textarea
                          className="textinput"
                          id="i5vyy-6"
                          placeholder="Please enter Message..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="btn-wrapper">
                      <button className="submit-btn" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div
                className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10"
                id="ifgi"
              >
                <div className="container-box">
                  <div className="text-content">
                    <p className="text-blk contactus-head">Contact Me</p>
                    <p className="text-blk contactus-subhead">
                      You are most welcome to contact me , if you have any
                      question, I will really appreciate for your time .
                    </p>
                  </div>
                  <div className="workik-contact-bigbox">
                    <div className="workik-contact-box">
                      <div className="phone text-box">
                        <img
                          className="contact-svg"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg"
                        />
                        <p className="contact-text">+1 619 530 4555</p>
                      </div>
                      <div className="address text-box">
                        <img
                          className="contact-svg"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg"
                        />
                        <p className="contact-text">habibiatah@gmail.com</p>
                      </div>
                      <div className="mail text-box">
                        <img
                          className="contact-svg"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg"
                        />
                        <p className="contact-text">California , San Diego</p>
                      </div>
                    </div>

                    <div className="social-media-links">
                      <a href="mailto:habibiatah@gmail.com">
                        <img
                          className="social-svg"
                          id="is9ym"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/atah-ur-rahman-2bb841242/"
                        target="_blank"
                      >
                        <img
                          className="social-svg"
                          id="i706n"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/official_atah/"
                        target="_blank"
                      >
                        <img
                          className="social-svg"
                          id="ib9ve"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/atah.rahman.12/"
                        target="_blank"
                      >
                        <img
                          className="social-svg"
                          id="ie9fx"
                          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
                        />
                      </a>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
  background: #06022c33;
  position: relative;

  .head-text-box {
    text-align: center;
  }

  .social-media-links{
    display: none;
  }
`;

export default ContactSection;
