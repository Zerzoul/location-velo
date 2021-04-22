import logo from '../assests/logo.png'

const NavBar = () => {
    return (
        <header>
            <div className="nav-header">
                <div className="nav-header-link">
                    <a href="/">home</a>
                    <div className="nav-header-logo">
                        <img src={logo} alt="location de vélo Lyonnais"/>
                    </div>
                    <a href="/connexion">connexion</a>
                </div>
            </div>
        </header>
    );
}
 
export default NavBar;