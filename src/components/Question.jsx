import * as React from "react";
import styled from "styled-components";

const StyledQuestion = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #2F3546;

    padding-bottom: 1%;
    margin-left: 30%;
`;

const StyledOptions = styled.input`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #2F3546
`;

const StyledBorder = styled.div`
    border-bottom: 1px solid rgba(47, 53, 70, 0.2);
    margin-below: 12px;
`;
export function Question(props){
    return (
        <>
       <StyledQuestion>{props.number}. {props.name}</StyledQuestion>
       <StyledOptions type="radio"></StyledOptions>
       {/* <StyledBorder></StyledBorder> */}
        </>
    );
}