import React, { useState, useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function StartPage({ setCurrentPage }) {
    const [email, setEmail] = useState("");
    const { setQuizData } = useContext(QuizContext);

    const startQuiz = async () => {
        if (!email.trim()) {
            alert("Please enter your email address");
            return;
        }

        try {
            const response = await fetch("https://opentdb.com/api.php?amount=15");
            if (!response.ok) {
                throw new Error("Failed to fetch quiz data");
            }

            const data = await response.json();
            setQuizData(data.results);
            setCurrentPage("quiz");
        } catch (error) {
            alert("Something went wrong. Please try again later.");
            console.error(error);
        }
    };

    return (
        <div className="start-page">
            <div className="card">
                <div className="card-header">
                    <h1>Welcome to the Quiz</h1>
                </div>
                <div className="card-body">
                    <p>Test your knowledge with our fun and interactive quiz!</p>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="email-input"
                    />
                    <button onClick={startQuiz} className="start-button">
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StartPage;
