import React from 'react';
import Card from '../components/Card';

const CardList = ({characters, visible}) => {
    return(
        <div>{
            characters.slice(0, visible).map((character, i) => {
                return(
                    <Card
                        key={characters[i].char_id}
                        name={characters[i].name}
                        birthday={characters[i].birthday}
                        occupation={characters[i].occupation}
                        image={characters[i].img}
                        status={characters[i].status}
                        portrayed={characters[i].portrayed}/>


                );
            })
            }
        </div>
    );
}

export default CardList;