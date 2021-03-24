import React from 'react';
import Container from '@material-ui/core/Container';
import logo from '../../images/Logo.png';

function Header() {
    return (
        <header className="header">
            <Container>
                <img src={logo} alt="logo"/>
            </Container>
        </header>
    );
}

export { Header };
