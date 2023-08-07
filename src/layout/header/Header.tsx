import React from "react";
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const itemsMenu = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
    return (
        <div>
            <StyledHeader>
                <Container>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <Logo/>
                        <HeaderMenu itemsMenu={itemsMenu}/>
                    </FlexWrapper>
                </Container>
            </StyledHeader>
        </div>
    )
}

const StyledHeader = styled.header`
  background-color: rgba(31, 31, 32, 0.90);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999999;
`
