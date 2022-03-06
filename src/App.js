import React, {useState} from 'react';
import QuizCard from "./QuizCard";
import shuffle from "./utils";
import GameOver from "./GameOver";


const App = () => {

    const [quizzes, setQuizzes] = useState(null);
    const [startGame, setStartGame] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [endGame, setEndGame] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [gameScore, setGameScore] = useState(0);


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

        setCorrectAnswer(results[0].correct_answer)

        setLoading(true);

    }

    const navigateNextQuiz = () => {
        console.log('Next Quiz');
        const isLastQuestion = quizzes.length - 1 === selectedQuestionIndex

        if (isLastQuestion) {
            setEndGame(true);
        } else {
            const currentIndex = selectedQuestionIndex + 1
            setSelectedQuestionIndex(currentIndex)

            setSelectedQuestion({
                question: quizzes[currentIndex].question,
                answers: shuffle(quizzes[currentIndex])
            })
            setCorrectAnswer(quizzes[currentIndex].correct_answer)
            setSelectedAnswer(null);
        }
    }
    
    const resetQuiz = () => {
        setQuizzes(null);
        setStartGame(false);
        setSelectedQuestionIndex(0);
        setSelectedQuestion(null);
        setLoading(false);
        setEndGame(false);
        setGameScore(0);
    }

    const selectAnswer = (answer) => {
        setSelectedAnswer(answer)

        if (answer === correctAnswer) {
            setGameScore((prevScore => {
                return prevScore + 1
            }))
        }
    }
    console.log(correctAnswer);
    return (
        <div className={'main'}>
            <h2 className={'text-center'}>Quiz app</h2>
            {endGame && (<GameOver resetQuiz={resetQuiz} gameScore={gameScore}/>)}
            {startGame && loading && !endGame && <QuizCard
                selectedQuestion={selectedQuestion}
                navigateNextQuiz={navigateNextQuiz} selectAnswer={selectAnswer}
                selectedAnswer={selectedAnswer}
                correctAnswer={correctAnswer}
                quizzes={quizzes}
                selectedQuestionIndex={selectedQuestionIndex}
            />}
            {!startGame && <button className={'btn'} onClick={startQuiz}>Start Quiz</button>}
        </div>
    );
};

export default App;