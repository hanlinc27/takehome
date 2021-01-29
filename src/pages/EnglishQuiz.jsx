import * as React from "react";
import { useState } from "react";
import { Title } from "../components/Title";
import axios from 'axios';
import { useEffect } from 'react';
import { EnglishQuestion } from '../components/EnglishQuestion';
import { StyledReturn } from '../pages/MathQuiz';
export function EnglishQuiz() {
    const [questions, setQuestions] = useState(0);
    const [title, setTitle] = useState(0);

    useEffect(() => {
        axios.get (
            `http://localhost:3000/api/quizzes/english`
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
                      return(
                      <EnglishQuestion 
                      key={i}
                      number={i+1} 
                      name={questions[key].text} 
                      options = {questions[key].options}
                      ></EnglishQuestion>
                      );
                      
                  })}
                </>
              );
}