import React from 'react';
import CardDeath from '../components/CardDeath';

const CardListDeath = ({VisibleDeaths, deaths}) => {
    return (
        <div>
            {
                deaths.slice(0, VisibleDeaths).map((deaths, i ) => {
                    return (<CardDeath
                            key={i}
                            death={deaths[i].death}
                            cause={deaths[i].cause}
                            responsible={deaths[i].responsible}
                            last_words={deaths[i].last_words}/>

                    );
                })
            }

        </div>
    );
}

export default CardListDeath;