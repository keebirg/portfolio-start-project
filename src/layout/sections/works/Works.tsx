import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import imgWork1 from "../../../assets/images/work_1.webp"
import imgWork2 from "../../../assets/images/work_2.webp"
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from "../../../components/Container";

const itemsMenu = ["All", "landing page", "React", "spa"];

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu itemsMenu={itemsMenu}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <Work
                        src={imgWork1}
                        title={"Social Network"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                    />
                    <Work
                        src={imgWork2}
                        title={"Timer"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}
                    />
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`

`
