import React, { createContext, useState } from "react";

export const QuizContext = createContext();

export function QuizProvider({ children }) {
    const [quizData, setQuizData] = useState([]);
    const [answers, setAnswers] = useState({});

    return (
        <QuizContext.Provider value={{ quizData, setQuizData, answers, setAnswers }}>
            {children}
        </QuizContext.Provider>
    );
}
