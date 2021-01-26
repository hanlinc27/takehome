import * as React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    margin-top: 10%;
    color: #2F3546;
    margin-bottom: 72px;
`;

export function Title(props){
    return (
        <>
       <StyledTitle>{props.name}</StyledTitle>
        </>
    );
}