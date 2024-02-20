import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/1.svg';
import './topnav.css';
import { Link } from '@mui/material';

const TopNav = () => {
    const menuData = [
        {
            path: '/',
            name: 'Home',
        },
        {
            path: '/api',
            name: 'APi',
        },
    ];

    return (
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container>
                <Image className='logo' src={logo} />
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto gap-5'>
                        {menuData.map(item => (
                            <Link
                                href={item.path}
                                key={item.name}
                                underline='none'
                            >
                                <div className='list-item'>{item.name}</div>
                            </Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;
