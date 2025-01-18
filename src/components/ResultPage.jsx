import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function ResultPage() {
    const { quizData, answers } = useContext(QuizContext);

    return (
        <div className="result-page">
            <h1>Quiz Results</h1>
            <ul>
                {quizData.map((question, index) => (
                    <li key={index}>
                        <p>Question: {question.question}</p>
                        <p>Your Answer: {answers[index] || "Not Answered"}</p>
                        <p>Correct Answer: {question.correct_answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ResultPage;
