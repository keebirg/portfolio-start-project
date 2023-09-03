import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from "./MobileMenu_Styles";

export const MobileMenu: React.FC<{itemsMenu: Array<string>}> = (props: { itemsMenu: Array<string> }) => {
    let [isButton, setIsButton]=useState(false)

    const onClickMenuHendler=()=>setIsButton(!isButton)

    return (
        <S.StyledMobileMenu>
            <S.BurgerButton onClick={onClickMenuHendler} isOpen={isButton}>
                <span> </span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={isButton}>
                <Menu itemsMenu={props.itemsMenu}/>
            </S.MobileMenuPopup>
        </S.StyledMobileMenu>
    );
};








