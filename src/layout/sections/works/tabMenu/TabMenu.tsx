import React from 'react';
import styled from "styled-components";
import {Link} from '../../../../components/Link';
import {TabMenuType, TypeTabMenuType} from "../Works";

type TabMenuPropsType = {
    tabsMenu: Array<TabMenuType>
    changeTabsMenu: (value: TypeTabMenuType) => void
    currentTypeTabMenu: TypeTabMenuType
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {
                    props.tabsMenu.map((item: TabMenuType, index: number) => {
                        return <ListItem key={index}>
                            <Link as={'button'}
                                  active={props.currentTypeTabMenu === item.type}
                                  onClick={() => props.changeTabsMenu(item.type)}>
                                {item.title}</Link>
                        </ListItem>
                    })
                }
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`


  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`

`





