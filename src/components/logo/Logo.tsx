import React from 'react';
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from 'react-scroll';

export const Logo: React.FC = () => {
    return (
        <a onClick={()=>scroll.scrollToTop()}>
            <Icon iconId={'favicon'} width={'50'} height={'50'} viewBox={'0 0 50 50'}/>
            {/*<Icon iconId={'onMenu'} width={'50'} height={'50'} viewBox={'0 0 100 100'}/>*/}
        </a>
    );
};
