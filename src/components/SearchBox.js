import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col col-sm-8 form'>
			<input
				className='form-control'
				variant="danger"
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search a movie...'
			></input>
		</div>
	
	);
};

export default SearchBox;
