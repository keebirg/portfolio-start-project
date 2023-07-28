import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {Work} from "./work/Work";
import imgWork1 from "../../../assets/images/work_1.webp"
import imgWork2 from "../../../assets/images/work_2.webp"
import {FlexWrapper} from '../../../components/FlexWrapper';

const itemsMenu = ["All", "landing page", "React", "spa"];

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu itemsMenu={itemsMenu}/>
            <FlexWrapper justify={"space-around"}>
                <Work
                    src={imgWork1}
                    title={"Social Network"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                />
                <Work
                    src={imgWork2}
                    title={"Timer"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
                />
            </FlexWrapper>


        </StyledWorks>
    );
};

const StyledWorks = styled.div`
  min-height: 100vh;
  background-color: #6eaaf6;
`
