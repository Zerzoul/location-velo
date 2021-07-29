import { Nav, Image, Navbar } from 'react-bootstrap';
import logo from '../assests/logo.png'

const NavBar = () => {
    return (
        <header>
            <Navbar className="justify-content-center nav-header">
                <Nav activeKey="/" className="nav-header-link">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Navbar.Brand className="nav-header-logo m-0 p-0">
                        <Image src={logo} alt="location de vélo Lyonnais" roundedCircle />
                    </Navbar.Brand>
                    <Nav.Link href="/connexion" eventKey="link-2">Connexion</Nav.Link>
              </Nav>
            </Navbar>
        </header>
    );
}
 
export default NavBar;