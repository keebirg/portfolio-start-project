import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Mihail</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon width={"21"} height={"21"} viewBox={"0 0 21 21"} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon width={"21"} height={"21"} viewBox={"0 0 21 21"} iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon width={"21"} height={"21"} viewBox={"0 0 21 21"} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon width={"21"} height={"21"} viewBox={"0 0 21 21"} iconId={"vk"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Mihail Ilin, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const Name = styled.span`
  font-family: Josefin Sans, sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
`


const Copyright = styled.small`
  opacity: 0.5;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialItem = styled.li`
  
`

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.10);

  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${theme.colors.accent};
  
  
  &:hover{
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
 
`