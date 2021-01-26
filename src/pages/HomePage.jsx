import * as React from "react";
import styled from "styled-components";
import { Title } from "../components/Title";

const StyledQuizLinks = styled.a`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #5E55F6;
    display: block;
    text-decoration: none;
    margin-top: 16px;
    top: 50%;
    left: 30%;

    &:hover{
       opacity: 0.8;
    }
    &:focus{
        opacity: 0.8;
    }
    
    
`;
export function HomePage(){

    return (
        <>
        <Title name = "Quizzes"></Title>
        <StyledQuizLinks href="/math">Basic Math Quiz</StyledQuizLinks>
        <StyledQuizLinks href="/english">Basic English Quiz</StyledQuizLinks>
        </>

    );
}