import React from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { StyledSearch } from './Search.styles';

const Search = () => {
  return (
    <StyledSearch>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="bi bi-search" />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Search" />
      </InputGroup>
    </StyledSearch>
  );
};

export default Search;
