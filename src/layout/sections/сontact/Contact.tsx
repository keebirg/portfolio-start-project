import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/StyledButton";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <StyledInput placeholder={"Name"}/>
                <StyledInput placeholder={"Email"}/>
                <StyledInput placeholder={"Text"} as={"textarea"}/>
                <StyledButton type={"submit"}>Send message</StyledButton>

            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.div`
  min-height: 50vh;
  background-color: yellow;

`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;

`

const StyledInput = styled.input`

`
