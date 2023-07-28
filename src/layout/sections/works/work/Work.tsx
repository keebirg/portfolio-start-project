import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    src: string
    title: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <StyledImg src={props.src}/>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledText>{props.text}</StyledText>
            <StyledLink href={"#"}>demo</StyledLink>
            <StyledLink href={"#"}>Code</StyledLink>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: yellow;
  max-width: 540px;
  width: 100%;

`

const StyledImg = styled.img`
  width: 100%;
  height: 260px;

  object-fit: cover;

`
const StyledTitle = styled.h3`

`
const StyledText = styled.p`

`
const StyledLink = styled.a`

`


