import React from 'react';
import {S} from "./Menu_Styles";

type ItemType={ href:string, title:string }

const itemsMenu:Array<ItemType> = [
    {
        title: "Home",
        href: 'home',
    },
    {
        title: "Works",
        href: "works",
    },
    {
        title: "Skills",
        href: "skills",
    },
    // {
    //     title: "Testimony",
    //     href: "testimony",
    // },
    {
        title: "Contact",
        href: "contact",
    }

];

export const Menu:React.FC = () => {
    return (
        <ul>
            {
                itemsMenu.map((item: ItemType, index: number) => {
                    return <S.ListItem key={index}>
                        <S.LinkMenu
                            // offset={30}
                            // activeClass="active"
                            // spy={true}
                            smooth={true}
                            to={item.href}>
                            {item.title}
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{item.title}</span>
                            </S.Mask>
                        </S.LinkMenu>
                    </S.ListItem>
                })
            }
        </ul>
    );
};

