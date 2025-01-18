import React from "react";

function NavigationPanel({ totalQuestions, currentQuestion, setCurrentQuestion, userAnswers }) {
    return (
        <div className="navigation-panel">
            {[...Array(totalQuestions)].map((_, index) => (
                <button
                    key={index}
                    className={userAnswers[index] ? "answered" : ""}
                    onClick={() => setCurrentQuestion(index)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}

export default NavigationPanel;
