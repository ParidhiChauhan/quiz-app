import React, { useState } from "react";
import StartPage from "./components/StartPage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import { QuizProvider } from "./context/QuizContext";

function App() {
    const [currentPage, setCurrentPage] = useState("start");

    return (
        <QuizProvider>
            {currentPage === "start" && <StartPage setCurrentPage={setCurrentPage} />}
            {currentPage === "quiz" && <QuizPage setCurrentPage={setCurrentPage} />}
            {currentPage === "result" && <ResultPage />}
        </QuizProvider>
    );
}

export default App;
