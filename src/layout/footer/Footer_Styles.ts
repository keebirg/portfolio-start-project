import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const Name = styled.span`
  ${font({family: "Josefin Sans, sans-serif", weight: 700, Fmin: 16, Fmax: 22 })}
  letter-spacing: 3px;
`


const Copyright = styled.small`
  opacity: 0.5;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialItem = styled.li`
  
`

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.10);

  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${theme.colors.accent};
  
  
  &:hover{
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`

export const S={
    StyledFooter,
    Name,
    Copyright,
    SocialList,
    SocialItem,
    SocialLink,
}