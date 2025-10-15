import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'


function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <Form className="mb-4">
            <Form.Control
                type="text"
                placeholder="Search users by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </Form>
    );
}

export default SearchBar;
