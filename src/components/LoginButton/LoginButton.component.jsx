import React, {useState} from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle,} from 'reactstrap';
import {StyledLoginButton} from './LoginButton.styles';

const LoginButton = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <StyledLoginButton>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle>
                    <i className="bi bi-person-circle"/>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Login</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </StyledLoginButton>
    );
};
export default LoginButton;
