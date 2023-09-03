import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  margin-right: 24px;


  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
    }
  }

`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`


const MainTitle = styled.h1`
  ${font({weight: 400, Fmin: 20, Fmax: 27,})}
  margin-bottom: 65px;
`
const Name = styled.h2`
  ${font({family: "Josefin Sans, sans-serif", weight: 700, Fmin: 36, Fmax: 50,})}
  letter-spacing: 0.05em;
  margin: 10px 0;
  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }


  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;

    }
  }

`


const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`

export const S={
    StyledMain,
    PhotoWrapper,
    Photo,
    MainTitle,
    Name,
    SmallText
}