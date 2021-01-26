import * as React from "react";
import { useState } from "react";
import { Title } from "../components/Title";
import axios from 'axios';
import { useEffect } from 'react';
import { Question } from '../components/Question';

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
                <Title name={title}></Title>
                  {Object.keys(questions).map((key, i) => {
                      return(
                      <Question 
                      key={i}
                      number={i+1} 
                      name={questions[key].text} ></Question>
                      );
                      
                  })}
                </>
              );
}