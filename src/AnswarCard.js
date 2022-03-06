import React from 'react';

const AnswerCard = ({answer, selectAnswer}) => {

    return (
        <div>
            <ul><li onClick={() => {selectAnswer(answer)}}>{answer}</li></ul>
        </div>
    );
};

export default AnswerCard;