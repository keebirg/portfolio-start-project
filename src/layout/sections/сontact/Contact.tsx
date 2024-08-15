import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contact_Styles";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e:any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_q5jaiox', 'template_cnytezt', form.current, {
                publicKey: 'fZcjDA_nSSnUga3Br',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    }
    return (
        <S.StyledContact >
            <Container >
                <SectionTitle id={'contact'}>Contact</SectionTitle>
                <S.StyledForm ref={form} onSubmit={sendEmail}>
                    <S.StyledInput required placeholder={"Name"} name={'user_name'}/>
                    <S.StyledInput required placeholder={"Subject"} name={'subject'}/>
                    <S.StyledInput required placeholder={"Email"} name={'email'}/>
                    <S.StyledInput required placeholder={"Text"} as={"textarea"} name={'message'}/>
                    <Button type={"submit"}>Send message</Button>
                </S.StyledForm>
            </Container>

        </S.StyledContact>
    );
};


