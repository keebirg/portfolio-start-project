import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

const SkillData = [
    {
        iconId: "code",
        text: "",
        title: "html5",
    },
    {
        iconId: "css",
        text: "",
        title: "css3",
    },
    {
        iconId: "redux",
        text: "",
        title: "REDUX",
    },
    {
        iconId: "react",
        text: "",
        title: "React",
    },
    {
        iconId: "stComp",
        text: "",
        title: "styled components",
    },
    {
        iconId: "tsx",
        text: "",
        title: "typescript",
    }
]

export const Skills: React.FC = () => {
    return (
        <StyledSkills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    {SkillData.map((t, index) => {
                        return (
                            <Skill key={index}
                                iconId={t.iconId}
                                text={t.text}
                                title={t.title}
                            />
                        )
                    })}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`