import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
// Create a Context

const ThemeButton = () => {
    const theme = useContext(ThemeContext); // Use context value

    return (
        <button style={{ backgroundColor: theme === 'dark' ? '#333' : '#ccc' }}>
            I am styled by theme context!
        </button>
    );
}


export default ThemeButton