import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Mihail</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink href={"#"}>
                            <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
  background-color: chartreuse;
  min-height: 30vh;
`

const Name = styled.span`
`


const Copyright = styled.small`
`

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
`