import React, { useContext, useState } from "react";
import Timer from "./Timer";
import NavigationPanel from "./NavigationPanel";
import QuestionCard from "./QuestionCard";
import { QuizContext } from "../context/QuizContext";

function QuizPage({ setCurrentPage }) {
    const { quizData, setAnswers } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [animationClass, setAnimationClass] = useState("");

    // Handle user answer
    const handleAnswer = (answer) => {
        setUserAnswers({ ...userAnswers, [currentQuestion]: answer });
    };

    // Change question with animation
    const changeQuestion = (newQuestion) => {
        if (newQuestion !== currentQuestion) {
            // Add exit animation
            setAnimationClass("fade-out");
            setTimeout(() => {
                // Update the question after the animation
                setCurrentQuestion(newQuestion);
                setAnimationClass("fade-in");
            }, 300); // Match CSS animation duration
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
                setCurrentQuestion={changeQuestion}
                userAnswers={userAnswers}
            />
            <div className={`question-container ${animationClass}`}>
                <QuestionCard
                    question={quizData[currentQuestion]}
                    handleAnswer={handleAnswer}
                    userAnswer={userAnswers[currentQuestion]}
                />
            </div>
            <div className="navigation-buttons">
                <button
                    onClick={() => changeQuestion(currentQuestion - 1)}
                    disabled={currentQuestion === 0}
                    className={`nav-button ${currentQuestion === 0 ? "disabled" : ""}`}
                >
                    Previous
                </button>
                {currentQuestion < quizData.length - 1 ? (
                    <button
                        onClick={() => changeQuestion(currentQuestion + 1)}
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
