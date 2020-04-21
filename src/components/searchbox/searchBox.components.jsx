import React from 'react';

import './searchBox.styles.css'



// functional Component is made 
export const SearchBox = ({placeholder,handleChange}) => (
    <input className = 'search'
     type = 'search' 
    placeholder = {placeholder} 
    onChange = {handleChange}
    />
)