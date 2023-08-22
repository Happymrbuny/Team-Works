import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import TeamLogo from '../app/assets/img/team-logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <Navbar dark color='black' sticky='top' expand='md'>
        <NavbarBrand className='ms-2' href='/'>
            <img src={TeamLogo} className='float-start' alt='Team Logo' />
            <h1 className='mt-2'>Team Works</h1>
        </NavbarBrand> 
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
        <Collapse isOpen={menuOpen} navbar>
            <Nav className='ms-auto' navbar>
                <NavItem>
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='Team-Generator'>Team Generator</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/Bracket-Generator'>Bracket Generator</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/Coin-Toss'>Coin Toss</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>);
};

export default Header;