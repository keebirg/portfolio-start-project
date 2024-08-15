import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

const ListItem = styled.li`
  position: relative;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.colors.accent};
  transition: ${theme.animation.transition};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`



const LinkMenu = styled(Link)`
  color: ${theme.colors.accent};
  text-align: center;
  font-family: Josefin Sans, sans-serif;
  font-size: 30px;
  font-weight: 400;
 

  &::before {
    content: "";
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
    transition: ${theme.animation.transition};
  }

  &:hover, &.active {

    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }

  }
`



export const S = {
    ListItem,
    Mask,
    LinkMenu,
}