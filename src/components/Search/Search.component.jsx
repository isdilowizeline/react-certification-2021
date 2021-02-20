import React from 'react';
import {Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

const Search = () => {
    return (
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                    <i className="bi  bi-search"/>
                </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Search"/>
        </InputGroup>
    );
};

export default Search;
