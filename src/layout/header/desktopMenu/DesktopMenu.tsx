import React from 'react';
import styled from "styled-components";
import {Menu} from "../menu/Menu";

export const DesktopMenu: React.FC<{itemsMenu: Array<string>}> = (props: { itemsMenu: Array<string> }) => {
    return (
        <StyledDesktopMenu>
            <Menu itemsMenu={props.itemsMenu}/>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  
`




