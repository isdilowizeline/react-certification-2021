import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown,} from 'reactstrap';
import {StyledLoginButton} from './LoginButton.styles';

const LoginButton = () => {
  return (
      <StyledLoginButton>
        <UncontrolledButtonDropdown>
          <DropdownToggle caret>
            <i className="bi bi-person-circle"/>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Login</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </StyledLoginButton>
  );
};
export default LoginButton;
