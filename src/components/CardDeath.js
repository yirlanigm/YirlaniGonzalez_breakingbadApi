import React from 'react';

const CardDeath = ({death, cause, responsible, last_words}) => {
    return(
        <article className='center'>
            <h1>{death}</h1>
            <div>
                <p>Cause: {cause}</p>
                <p>responsible:{responsible}</p>
                <p>last words: {last_words}</p>


            </div>
        </article>
    );
}

export default CardDeath;
