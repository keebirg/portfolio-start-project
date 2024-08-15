import React from 'react';
import {Link} from '../../../../components/Link';
import {Button} from "../../../../components/Button";
import {S} from "./Work_Styles";

type WorkPropsType = {
    src: string
    title: string
    text: string
    github:string
    url:string
}

export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.StyledWork>
            <S.ImgWrapper>
                <S.StyledImg src={props.src}/>
                {/*<Button>view project</Button>*/}
            </S.ImgWrapper>

            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                {!!props.url && <Link href={props.url}>demo</Link>}
                <Link href={props.github}>Code</Link>
            </S.Description>
        </S.StyledWork>
    );
};


