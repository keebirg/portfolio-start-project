import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <StyledInput placeholder={"Name"}/>
                    <StyledInput placeholder={"Email"}/>
                    <StyledInput placeholder={"Text"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>

        </StyledContact>
    );
};

const StyledContact = styled.section`

`

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  
  textarea{
    resize: none;
    height: 155px;
  }

`

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.secondaryBg};
  padding: 7px 15px;

  color: ${theme.colors.font};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
  font-family: Poppins, sans-serif;
  
  &::placeholder{
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  
  &:focus-visible{
    outline: 1px solid ${theme.colors.borderColor};
  }
`
