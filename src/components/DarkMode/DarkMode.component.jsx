import React from 'react';
import {CustomInput} from 'reactstrap';
import {StyledDarkMode} from './DarkMode.styles';

const DarkMode = () => {
    return (
        <StyledDarkMode>
            <CustomInput
                inline
                type="switch"
                id="darkModeToggle"
                name="darkMode"
                label="Dark Mode"
            />
        </StyledDarkMode>
    );
};
export default DarkMode;
