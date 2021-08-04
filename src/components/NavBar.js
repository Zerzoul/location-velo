import { Nav, Image, Navbar } from 'react-bootstrap';
import logo from '../assests/logo.png'

const NavBar = () => {
    return (
        <header>
            <Navbar className="nav-header justify-content-center">
                <Nav activeKey="/" className="d-flex align-items-center">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Navbar.Brand className="nav-header-logo p-0">
                        <Image src={logo} alt="location de vélo Lyonnais" />
                    </Navbar.Brand>
                    <Nav.Link href="/connexion" eventKey="link-2">Connexion</Nav.Link>
              </Nav>
            </Navbar>
        </header>
    );
}
 
export default NavBar;