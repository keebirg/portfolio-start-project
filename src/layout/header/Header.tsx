import React from "react";
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";

const itemsMenu = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;


    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        <div>
            <StyledHeader>
                <Container>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <Logo/>
                        {(width > breakpoint) ? <DesktopMenu itemsMenu={itemsMenu}/> :
                                              <MobileMenu itemsMenu={itemsMenu}/>}
                    </FlexWrapper>
                </Container>
            </StyledHeader>
        </div>
    )
}

const StyledHeader = styled.header`
  position: fixed;
  background-color: rgba(31, 31, 32, 0.90);
  padding: 20px 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999999;
`
