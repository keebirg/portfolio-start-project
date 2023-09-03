import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from "./MobileMenu_Styles";

export const MobileMenu: React.FC<{itemsMenu: Array<string>}> = (props: { itemsMenu: Array<string> }) => {
    return (
        <S.StyledMobileMenu>
            <S.BurgerButton isOpen={false}>
                <span> </span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={false}>
                <Menu itemsMenu={props.itemsMenu}/>
            </S.MobileMenuPopup>

        </S.StyledMobileMenu>
    );
};








