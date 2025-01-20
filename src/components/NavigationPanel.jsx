function NavigationPanel({ totalQuestions, currentQuestion, setCurrentQuestion, userAnswers }) {
    return (
        <div className="navigation-panel">
            {Array.from({ length: totalQuestions }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`nav-circle 
                        ${currentQuestion === index ? "active" : ""} 
                        ${userAnswers[index] !== undefined ? "attempted" : ""}`}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}

export default NavigationPanel;
