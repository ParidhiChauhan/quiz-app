import React, { useContext, useState } from "react";
import Timer from "./Timer";
import NavigationPanel from "./NavigationPanel";
import QuestionCard from "./QuestionCard";
import { QuizContext } from "../context/QuizContext";

function QuizPage({ setCurrentPage }) {
    const { quizData, setAnswers } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});

    // Handle user answer
    const handleAnswer = (answer) => {
        setUserAnswers({ ...userAnswers, [currentQuestion]: answer });
    };

    // Navigate to previous question
    const goToPrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
        }
    };

    // Navigate to next question
    const goToNext = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        }
    };

    // Submit the quiz
    const submitQuiz = () => {
        setAnswers(userAnswers);
        setCurrentPage("result");
    };

    return (
        <div className="quiz-page">
            <Timer onTimeout={submitQuiz} />
            <NavigationPanel
    totalQuestions={quizData.length}
    currentQuestion={currentQuestion}
    setCurrentQuestion={setCurrentQuestion}
    userAnswers={userAnswers}
/>

            <QuestionCard
                question={quizData[currentQuestion]}
                handleAnswer={handleAnswer}
                userAnswer={userAnswers[currentQuestion]}
            />
            <div className="navigation-buttons">
                <button
                    onClick={goToPrevious}
                    disabled={currentQuestion === 0}
                    className={`nav-button ${currentQuestion === 0 ? "disabled" : ""}`}
                >
                    Previous
                </button>
                {currentQuestion < quizData.length - 1 ? (
                    <button
                        onClick={goToNext}
                        className="nav-button"
                    >
                        Next
                    </button>
                ) : (
                    <button onClick={submitQuiz} className="submit-button">
                        Submit Quiz
                    </button>
                )}
            </div>
        </div>
    );
}

export default QuizPage;
