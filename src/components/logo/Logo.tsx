import React from 'react';
import {Icon} from "../icon/Icon";

export const Logo = () => {
    return (
        <a href={"#"}>
            <Icon iconId={'favicon'} width={'50'} height={'50'} viewBox={'0 0 50 50'}/>
            {/*<Icon iconId={'onMenu'} width={'50'} height={'50'} viewBox={'0 0 100 100'}/>*/}
        </a>
    );
};
