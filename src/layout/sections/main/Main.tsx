import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/my_photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Mihail Ilin</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>

                <Photo src={photo}/>
            </FlexWrapper>


        </StyledMain>
    );
};

const StyledMain = styled.div`
  height: 100vh;
  background-color: bisque;
`

const MainTitle = styled.h1`
`
const Name = styled.h2`
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`