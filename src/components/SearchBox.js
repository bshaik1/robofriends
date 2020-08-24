import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
                type='search'
                placeholder='search robots'
                onChange={searchChange}
                className='pa3 ba b--green bg-lightest-blue' />
        </div>

    );
}

export default SearchBox;