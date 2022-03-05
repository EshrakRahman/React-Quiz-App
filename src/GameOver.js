import React from 'react';

const GameOver = ({resetQuiz}) => {

    return (
        <div>
            <h3>Total Score: 12</h3>
            <button onClick={resetQuiz}>Reset Quiz</button>
        </div>
    );
};

export default GameOver;