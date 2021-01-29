import * as React from "react";
import { useState } from "react";
import { Title } from "../components/Title";
import axios from 'axios';
import { useEffect } from 'react';
import { MathQuestion } from '../components/MathQuestion';
import styled from "styled-components";

export const StyledReturn = styled.a`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin-left: 5%;
    text-align: center;
    color: #959595;
    &:hover{
        color: black;
    }
`;
export function MathQuiz() {
    const [questions, setQuestions] = useState(0);
    const [title, setTitle] = useState(0);

    useEffect(() => {
        axios.get (
            `http://localhost:3000/api/quizzes/math`
        )
        .then((response)=> {
            setQuestions(response.data.questions);
            setTitle(response.data.title);
        }).catch(err => console.error(err));
    }, []);
            return (
                <>
                                <StyledReturn href="/">Return Home</StyledReturn>

                <Title name={title}></Title>
                  {Object.keys(questions).map((key, i) => {
                      console.log(questions[key].id.charAt(questions[key].id.length-1));
                      return(
                      <MathQuestion key={i}
                      number={i+1} 
                      name={questions[key].text} 
                      options = {questions[key].options}
                      ></MathQuestion>
                      );
                      
                  })}
                </>
              );
}