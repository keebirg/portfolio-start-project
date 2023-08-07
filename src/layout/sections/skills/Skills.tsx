import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill
                    iconId={"code"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                    title={"html5"}
                />
                <Skill
                    iconId={"css"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                    title={"css3"}
                />
                <Skill
                    iconId={"figma"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                    title={"React"}
                />
                <Skill
                    iconId={"react"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                    title={"typescript"}
                />
                <Skill
                    iconId={"stComp"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                    title={"styled components"}
                />
                <Skill
                    iconId={"tsx"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                    title={"WEB DESIgN"}
                />

            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  min-height: 100vh;
  background-color: antiquewhite;
`