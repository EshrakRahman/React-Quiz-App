import React, {useState} from 'react';
import QuizCard from "./QuizCard";
import shuffle from "./utils";
import GameOver from "./GameOver";

const App = () => {

    const [quizzes, setQuizzes] = useState(null);
    const [startGame, setStartGame] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
    const [loading, setloading] = useState(false);
    const [endGame, setEndGame] = useState(false);


    const startQuiz = async () => {
        const data = await fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple');

        const {results} = await data.json();
        setQuizzes(results);
        setStartGame(true);
        setSelectedQuestion(
            {
                question: results[0].question,
                answers: shuffle(results[0])
            });

        setloading(true);

    }

    const navigateNextQuiz = () => {
        console.log('Next Quiz');
        const isLastQuestion = quizzes.length - 1 === selectedQuestionIndex

        if (isLastQuestion) {
            setEndGame(true);
        } else {
            setSelectedQuestionIndex((prevIndex) => {
                return prevIndex + 1;
            })

            setSelectedQuestion({
                question: quizzes[selectedQuestionIndex].question,
                answers: shuffle(quizzes[selectedQuestionIndex])
            })
        }
    }
    
    const resetQuiz = () => {
        console.log('reset');
        setQuizzes(null);
        setStartGame(false);
        setSelectedQuestionIndex(0);
        setSelectedQuestion(null);
        setloading(false);
        setEndGame(false);

        /*const [quizzes, setQuizzes] = useState(null);
        const [startGame, setStartGame] = useState(false);
        const [selectedQuestion, setSelectedQuestion] = useState(null);
        const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
        const [loading, setloading] = useState(false);
        const [endGame, setEndGame] = useState(false);*/
    }
    return (
        <div>
            <h2>Quiz app</h2>
            {endGame && (<GameOver resetQuiz={resetQuiz}/>)}
            {startGame && loading && !endGame && <QuizCard selectedQuestion={selectedQuestion} navigateNextQuiz={navigateNextQuiz}/>}
            {!startGame && <button onClick={startQuiz}>Start Quiz</button>}
        </div>
    );
};

export default App;