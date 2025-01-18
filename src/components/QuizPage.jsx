import React, { useContext, useState } from "react";
import Timer from "./Timer";
import NavigationPanel from "./NavigationPanel";
import QuestionCard from "./QuestionCard";
import { QuizContext } from "../context/QuizContext";

function QuizPage({ setCurrentPage }) {
    const { quizData, setAnswers } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});

    const handleAnswer = (answer) => {
        setUserAnswers({ ...userAnswers, [currentQuestion]: answer });
    };

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
            <button onClick={submitQuiz}>Submit Quiz</button>
        </div>
    );
}

export default QuizPage;
