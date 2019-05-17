import './style/header.css';

import { Nav } from 'react-bootstrap';
import React from 'react';

const componentClassName = 'header';

const Header = () => (
    <div className={`${componentClassName}`}>
        <div>
            <h1>NETFLIX</h1>
        </div>
        <Nav className={`${componentClassName}__header-nav`} activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
)

export default Header;