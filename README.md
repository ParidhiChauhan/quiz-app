# Quiz Application

This is a simple quiz application built with React.js that allows users to answer a set of 15 questions. The application provides a timer, a navigation panel to move between questions, and a result page displaying the answers along with the correct ones. It fetches the quiz questions from the Open Trivia Database API.

## Features:
- **Start Page**: User inputs their email address to begin the quiz.
- **Quiz Page**: Displays 15 questions, with a timer counting down from 30 minutes.
- **Navigation Panel**: Allows users to navigate between questions, marking visited and answered questions.
- **Timer**: The quiz automatically submits when the timer reaches zero.
- **Results Page**: Shows the user's answers compared with the correct answers.

## Tech Stack:
- React.js
- CSS for styling
- Open Trivia Database API (`https://opentdb.com/api.php?amount=15`) for quiz questions

## Project Structure:
```plaintext
quiz-app/
│── public/
│   │── index.html
│── src/
│   │── components/
│   │   │── StartPage.jsx
│   │   │── QuizPage.jsx
│   │   │── QuestionCard.jsx
│   │   │── ResultPage.jsx
│   │   │── Timer.jsx
│   │   │── NavigationPanel.jsx
│   │── context/
│   │   │── QuizContext.jsx
│   │── App.jsx
│   │── main.jsx
│   │── index.css
│── package.json
|___README.md
