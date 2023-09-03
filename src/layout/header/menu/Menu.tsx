import React from 'react';
import {S} from "./Menu_Styles";

export const Menu:React.FC<{ itemsMenu: Array<string> }> = (props: { itemsMenu: Array<string> }) => {
    return (
        <ul>
            {
                props.itemsMenu.map((item: string, index: number) => {
                    return <S.ListItem key={index}>
                        <S.Link href={"#"}>
                            {item}
                            <S.Mask>
                                <span>{item}</span>
                            </S.Mask>
                            <S.Mask>
                                <span>{item}</span>
                            </S.Mask>
                        </S.Link>
                    </S.ListItem>
                })
            }
        </ul>
    );
};

