import React from 'react';

const NavBar = (props) => {
	return (
        <>
        <nav class="navbar">
            <div class="container-fluid">
                <p class="navbar-brand">Movie App</p>
                <form class="d-flex input-group-lg">
                <input class="form-control me-2" 
                type="search" 
                placeholder="Find a movie" 
                aria-label="Search"
                value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}></input>
                </form>
            </div>
        </nav>
      </>
	
	);
};

export default NavBar;


