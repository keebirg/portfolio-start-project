import React from "react";
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";

const itemsMenu=["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
    return (
        <div>
            <StyledHeader>
                <Logo/>
                <Menu itemsMenu={itemsMenu}/>
            </StyledHeader>
        </div>
    )
}

const StyledHeader=styled.header`
    background-color: aquamarine;
  display: flex;
  justify-content: space-between;
`
