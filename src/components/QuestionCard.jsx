import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import './QuestionCard.css';  // Import the CSS file

function QuestionCard({ question, handleAnswer, userAnswer }) {
    const options = [question.correct_answer, ...question.incorrect_answers].sort();
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        return () => setShow(false);
    }, [question]);

    return (
        <CSSTransition
            in={show}
            timeout={500}
            classNames="fade"
            unmountOnExit
        >
            <div className="question-card">
                <h3>{question.question}</h3>
                {options.map((option, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            name="answer"
                            value={option}
                            checked={userAnswer === option}
                            onChange={() => handleAnswer(option)}
                        />
                        <label>{option}</label>
                    </div>
                ))}
            </div>
        </CSSTransition>
    );
}

export default QuestionCard;
