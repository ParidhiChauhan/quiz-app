import React from "react";

function NavigationPanel({ totalQuestions, currentQuestion, setCurrentQuestion, userAnswers }) {
    return (
        <div className="navigation-panel">
            {Array.from({ length: totalQuestions }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`question-number ${currentQuestion === index ? "active" : ""}`}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}

export default NavigationPanel;
