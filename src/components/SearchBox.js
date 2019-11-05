import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa3'>
		<input 
		className='pa4 ba b--purple bg-light-pink'
		type='search' 
		placeholder='Search for a Robot'
		onChange={searchChange} />
		</div>
		);
}

export default SearchBox;