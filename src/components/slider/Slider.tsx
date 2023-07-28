import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../FlexWrapper';

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper wrap={"wrap"} justify={"center"}>
                <Slide>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Text>
                    <Name>
                        @ivan ivanow
                    </Name>
                </Slide>

                <Pagination>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                </Pagination>
            </FlexWrapper>



        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  border: 1px solid black;
  max-width: 500px;
  

`

const Slide = styled.div`

  text-align: center;


`

const Text = styled.p`


`

const Name = styled.span`

`

const Pagination = styled.span`
  span {
    display: inline-block;
    background-color: red;
    width: 10px;
    height: 10px;
    margin: 5px;
  }

`