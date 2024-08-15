import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};

  width: 330px;
  flex-grow: 1;

  @media ${theme.media.desktop} {
    max-width: 540px;
  }

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

`

const ImgWrapper = styled.div`
  position: relative;


  &::before {
    opacity: 0;
    content: "";
    //background: rgba(0, 0, 0, 0.30);
    //backdrop-filter: blur(2px);

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    width: 100%;
    height: 100%;
    transition: ${theme.animation.transition};
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
  }

  &:hover {
    ${Button} {
      opacity: 1;
    }

    &::before {
      opacity: 1;
    }
  }
  
  @media ${theme.media.tablet}{
    ${Button} {
      opacity: 1;
    }

    &::before {
      opacity: 1;
    }
  }
  
`

const StyledImg = styled.img`
  width: 100%;
  height: 260px;

  object-fit: cover;

`
const Title = styled.h3`

`
const Text = styled.p`
  margin: 14px 0 10px;

`

const Description = styled.div`
  padding: 25px 20px;
`

export const S={
    StyledWork,
    ImgWrapper,
    StyledImg,
    Title,
    Text,
    Description,
}