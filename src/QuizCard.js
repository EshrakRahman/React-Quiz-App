import React from 'react';
import AnswerCard from "./AnswarCard";

const QuizCard = ({selectedQuestion}) => {
    console.log(selectedQuestion);
    const {question, answers } = selectedQuestion;

    return (
        <div>
            <h1>{question}</h1>
            {answers.map((answer, i) => <AnswerCard key={i} answer={answer}/>)}
        </div>
    );
};

export default QuizCard;