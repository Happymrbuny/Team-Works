import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';
import TeamLogo from '../app/assets/img/team-logo.png';

const Header = () => {
    return (
    <Navbar dark color='black' sticky='top' expand='md'>
        <NavbarBrand href='/'>
            <img src={TeamLogo} alt='Team Logo' />
        </NavbarBrand>
    </Navbar>);
};

export default Header;