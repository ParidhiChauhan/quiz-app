import React, { useState, useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function StartPage({ setCurrentPage }) {
    const [email, setEmail] = useState("");
    const { setQuizData } = useContext(QuizContext);

    const startQuiz = async () => {
        if (!email) {
            alert("Please enter your email address");
            return;
        }

        const response = await fetch("https://opentdb.com/api.php?amount=15");
        const data = await response.json();
        setQuizData(data.results);
        setCurrentPage("quiz");
    };

    return (
        <div className="start-page">
            <h1>Welcome to the Quiz</h1>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );
}

export default StartPage;
