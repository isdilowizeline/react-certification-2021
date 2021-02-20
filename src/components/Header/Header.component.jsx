import React, {useRef, useState} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Burger from '../Burger';
import DarkMode from '../DarkMode';
import LoginButton from '../LoginButton';
import Search from '../Search';
import Menu from '../Menu';
import {useOnClickOutside} from '../../utils/hooks/clickOutside';

function Header() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
      <>
        <Container fluid className="header">
          <Row>
            <Col xs="2">
              <div ref={node}>
                <Burger open={open} setOpen={setOpen}/>
                <Menu open={open} setOpen={setOpen}/>
              </div>
            </Col>
            <Col xs="2">
              <Search/>
            </Col>
            <Col xs={{size: 3, offset: 4}}>
              <DarkMode/>
            </Col>
            <Col xs={{size: 1}}>
              <LoginButton/>
            </Col>
          </Row>
        </Container>
      </>
  );
}

export default Header;
