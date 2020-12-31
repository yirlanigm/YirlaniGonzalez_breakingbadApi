import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <input
                className='pa3 b--black bg-light-silver hover-bg-black-50 '
                type='search'
                placeholder='Search a character'
                onChange={searchChange}/>
        </div>

    );
}
export default SearchBox;