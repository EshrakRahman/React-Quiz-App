import React from 'react';

const AnswerCard = ({answer, selectAnswer, selectedAnswer, correctAnswer}) => {
    const isRightAnswer = selectedAnswer && answer === correctAnswer;
    const isWrongAnswer = selectedAnswer && answer !== correctAnswer;

    const correctClass = isRightAnswer ? 'correct-answer' : '';
    const wrongClass = isWrongAnswer ? 'wrong-answer' : '';
    const disableClass = selectedAnswer ? 'disable-answer': '';

    console.log(isRightAnswer);
    return (
        <React.Fragment>
            <ul className={'answer-list'}><li className={`${correctClass} ${wrongClass} ${disableClass}`} onClick={() => {selectAnswer(answer)}}>{answer}</li></ul>
        </React.Fragment>
    );
};

export default AnswerCard;