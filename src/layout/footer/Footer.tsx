import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles";

const SocialItemData=[
    // {iconId: "instagram", href: "#", disabled: true, viewBox:"0 0 21 21"},
    // {iconId: "linkedin", href: "#", disabled: true, viewBox:"0 0 21 21"},
    {iconId: "telegram", href: "https://t.me/Ilin_Mihail", disabled: false, viewBox:"0 0 21 21"},
    {iconId: "vk", href: "https://vk.com/keebirg", disabled: false, viewBox:"0 0 21 21"},
    {iconId: "github", href: "https://github.com/keebirg", disabled: true, viewBox:"2 2 20 20"},
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
                                <S.SocialLink onClick={(event)=>{t.disabled && event.preventDefault()}} href={t.href}>
                                    <Icon width={"21"} height={"21"} viewBox={t.viewBox} iconId={t.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2024 Mihail Ilin</S.Copyright>
            </FlexWrapper>
        </S.StyledFooter>
    );
};


