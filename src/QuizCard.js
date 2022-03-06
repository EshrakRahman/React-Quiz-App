import React from 'react';
import AnswerCard from "./AnswarCard";

const QuizCard = ({selectedQuestion, navigateNextQuiz, selectAnswer}) => {
    console.log(selectedQuestion);

    const navigateNext = () =>{
        navigateNextQuiz();
    }

    const {question, answers } = selectedQuestion;

    return (
        <div>
            <h1>{question}</h1>
            {answers.map((answer, i) => <AnswerCard key={i} answer={answer} selectAnswer={selectAnswer}/>)}
            <button onClick={navigateNext}>Next Question</button>
        </div>
    );
};

export default QuizCard;