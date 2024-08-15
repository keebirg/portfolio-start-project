import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contact_Styles";

export const Contact = () => {
    return (
        <S.StyledContact >
            <Container >
                <SectionTitle id={'contact'}>Contact</SectionTitle>
                <S.StyledForm>
                    <S.StyledInput placeholder={"Name"}/>
                    <S.StyledInput placeholder={"Email"}/>
                    <S.StyledInput placeholder={"Text"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.StyledForm>
            </Container>

        </S.StyledContact>
    );
};


