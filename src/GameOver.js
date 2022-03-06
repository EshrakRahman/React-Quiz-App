import React from 'react';

const GameOver = ({resetQuiz, gameScore}) => {

    return (
        <div>
            <h3>Total Score: {gameScore}</h3>
            <button className={'btn'} onClick={resetQuiz}>Reset Quiz</button>
        </div>
    );
};

export default GameOver;