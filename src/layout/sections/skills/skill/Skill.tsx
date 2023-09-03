import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from "./Skill_Styles";

type SkillPropsType = {
    iconId: string,
    title: string,
    text: string,
}

export const Skill:React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.text}</S.SkillText>
            </FlexWrapper>
        </S.StyledSkill>
    );
};



