import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function ResultPage() {
    const { quizData, answers } = useContext(QuizContext);

    return (
        <div className="result-page">
            <div className="result-card">
                <h1>Quiz Results</h1>
                <ul className="result-list">
                    {quizData.map((question, index) => (
                        <li key={index} className="result-item">
                            <div className="question-section">
                                <p className="question-text">
                                    <strong>Q{index + 1}: </strong>
                                    {question.question}
                                </p>
                                <p className="answer-text">
                                    <strong>Your Answer: </strong>
                                    <span
                                        className={
                                            answers[index] === question.correct_answer
                                                ? "correct"
                                                : "incorrect"
                                        }
                                    >
                                        {answers[index] || "Not Answered"}
                                    </span>
                                </p>
                                <p className="correct-answer">
                                    <strong>Correct Answer: </strong>
                                    {question.correct_answer}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ResultPage;
