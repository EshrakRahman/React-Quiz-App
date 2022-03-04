import React, {useState} from 'react';
import QuizCard from "./QuizCard";
import suffle from "./utils";

const App = () => {

    const [quizzes, setQuizzes] = useState(null);
    const [startGame, setStartGame] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [loading, setloading] = useState(false);


    const startQuiz = async () => {
        const data = await fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple');

        const {results} = await data.json();
        setQuizzes(results);
        setStartGame(true);
        setSelectedQuestion(
            {
                question: results[0].question,
                answers: suffle(results[0])
            });

        setloading(true);
        console.log(results);
    }
    return (
        <div>
            <h2>Quiz app</h2>
            {startGame && loading && <QuizCard selectedQuestion={selectedQuestion} />}
            {!startGame && <button onClick={startQuiz}>Start Quiz</button>}
        </div>
    );
};

export default App;