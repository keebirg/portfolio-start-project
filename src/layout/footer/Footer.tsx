import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles";

const SocialItemData=[
    {iconId: "instagram", href: "#"},
    {iconId: "linkedin", href: "#"},
    {iconId: "telegram", href: "#"},
    {iconId: "vk", href: "#"},
]

export const Footer:React.FC = () => {
    return (
        <S.StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Mihail</S.Name>
                <S.SocialList>
                    {SocialItemData.map((t, index)=>{
                        return(
                            <S.SocialItem key={index}>
                                <S.SocialLink href={t.href}>
                                    <Icon width={"21"} height={"21"} viewBox={"0 0 21 21"} iconId={t.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Mihail Ilin, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.StyledFooter>
    );
};


