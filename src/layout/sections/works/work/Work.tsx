import React from 'react';
import styled from "styled-components";
import {Link} from '../../../../components/Link';
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    src: string
    title: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImgWrapper>
                <StyledImg src={props.src}/>
                <Button>view project</Button>
            </ImgWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>Code</Link>
            </Description>

        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  max-width: 540px;
  width: 100%;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

`

const ImgWrapper = styled.div`
  position: relative;

  &:hover {
        
    &::before {
      content: "";
      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);

      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
    }

    ${Button}{
      opacity: 1;
    }
    
  }
  
  ${Button}{
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    &::before{
      width: 100%;
      height: 100%;
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

