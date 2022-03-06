import React from 'react';
import AnswerCard from "./AnswarCard";

const QuizCard = ({selectedQuestion, navigateNextQuiz, selectAnswer, selectedAnswer, correctAnswer, selectedQuestionIndex, quizzes}) => {
    console.log(selectedQuestion);

    const navigateNext = () =>{
        navigateNextQuiz();
    }

    const {question, answers } = selectedQuestion;

    return (
        <div>
            <h3>Question: {selectedQuestionIndex + 1} /{quizzes.length}</h3>
            <h1>{question}</h1>
            {answers.map((answer, i) => <AnswerCard key={i} answer={answer} selectAnswer={selectAnswer} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer}/>)}
            <button className={'btn'} onClick={navigateNext}>Next Question</button>
        </div>
    );
};

export default QuizCard;