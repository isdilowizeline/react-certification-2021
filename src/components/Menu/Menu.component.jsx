import React from 'react';
import {StyledMenu} from './Menu.styles';
import {bool} from 'prop-types';

const Menu = ({open}) => {
    return (
        <StyledMenu open={open}>
            <a href="/">
                <span role="img" aria-label="Home">
                    <i className="bi bi-house-door"/>
                </span>
                Home
            </a>
        </StyledMenu>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;