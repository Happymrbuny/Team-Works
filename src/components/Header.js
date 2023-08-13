import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';
import TeamLogo from '../app/assets/img/team-logo.png';

const Header = () => {
    return (
    <Navbar dark color='black' sticky='top' expand='md'>
        <NavbarBrand href='/'>
            <img src={TeamLogo} className='float-start' alt='Team Logo' />
            <h1 className='mt-2'>Team Tools</h1>
        </NavbarBrand>
    </Navbar>);
};

export default Header;