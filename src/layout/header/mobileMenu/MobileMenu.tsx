import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from "./MobileMenu_Styles";

export const MobileMenu: React.FC = () => {
    let [isButton, setIsButton]=useState(false)

    const onClickMenuHandler=()=>setIsButton(!isButton)

    return (
        <S.StyledMobileMenu>
            <S.BurgerButton onClick={onClickMenuHandler} isOpen={isButton}>
                <span> </span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={isButton}>
                <Menu />
            </S.MobileMenuPopup>
        </S.StyledMobileMenu>
    );
};








