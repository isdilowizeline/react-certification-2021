import React from 'react';
import {CustomInput} from 'reactstrap';

const DarkMode = () => {
    return (
        <>
            <CustomInput
                inline
                type="switch"
                id="darkModeToggle"
                name="darkMode"
                label="Dark Mode"
            />
        </>
    );
};
export default DarkMode;
