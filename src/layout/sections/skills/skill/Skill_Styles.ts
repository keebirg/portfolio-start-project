import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.10);
    
    
    position: absolute;
    left: 50%;  
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    
    
  }
`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`

const SkillText = styled.p`
  text-align: center;

`

const StyledSkill = styled.div`
  width: 330px;
  padding: 62px 20px 40px;
  flex-grow: 1;
  
  @media ${theme.media.mobile}{
    padding: 62px 0 40px;
  }
`

export const S={
    IconWrapper,
    SkillTitle,
    SkillText,
    StyledSkill,
}