import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { rgba } from "polished";

const SectionWrapper = styled.section`
  padding: 75px 0 40px;
  @media only screen and (max-width: 1219px) {
    padding-bottom: 70px;
  }
  @media only screen and (max-width: 991px) {
    padding-bottom: 80px;
  }
  @media only screen and (max-width: 624px) {
    padding: 45px 0 60px;
  }
  > div.container {
    display: flex;
    flex-wrap: wrap;
    @media only screen and (min-width: 1367px) {
      max-width: 1290px;
    }
    @media only screen and (max-width: 624px) {
      flex-direction: column-reverse;
    }
  }
`;

export const ThumbWrapper = styled.div`
  width: calc(100% - 710px);
  margin-right: 200px;
  margin-bottom: 100px;
  @media only screen and (max-width: 1219px) {
    width: calc(100% - 525px);
    margin-right: 60px;
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 991px) {
    width: calc(100% - 400px);
    margin-right: 50px;
  }
  @media only screen and (max-width: 624px) {
    width: 80%;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 35px;
  }
`;

export const TextWrapper = styled.div`
  width: 440px;
  margin-top: 70px;
  @media only screen and (max-width: 1219px) {
    margin-top: 0px;
    width: 425px;
  }
  @media only screen and (max-width: 991px) {
    width: 350px;
  }
  @media only screen and (max-width: 624px) {
    width: 100%;
  }
  h2 {
    color: ${themeGet("colors.white", "#ffffff")};
    font-size: 36px;
    line-height: 1.5;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 45px;
    @media only screen and (max-width: 1219px) {
      font-size: 30px;
      margin-bottom: 15px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 1.4;
    }
  }
  p {
    color: ${themeGet("colors.white", "#ffffff")};
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 0;
  }
  .feature__block {
    margin-top: 40px;
    align-items: center;
    padding-right: 40px;
    @media only screen and (max-width: 991px) {
      padding-right: 0;
    }
    h3 {
      color: ${themeGet("colors.white", "#ffffff")};
      font-size: 17px;
      line-height: 28px;
      font-weight: 700;
      margin-bottom: 10px;
      @media only screen and (max-width: 1366px) {
        line-height: 26px;
        margin-bottom: 7px;
      }
    }
    .icon__wrapper span {
      color: #ffffff;
      font-size: 64px;
      margin-right: 30px;
      line-height: 1em;
      font-family: "Work Sans", sans-serif;
      @media only screen and (max-width: 991px) {
        font-size: 52px;
        margin-right: 20px;
      }
    }
  }
`;

export default SectionWrapper;
