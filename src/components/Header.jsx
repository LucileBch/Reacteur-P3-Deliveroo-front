// ---------- HEADER component ----------
// Imports
import Logo from "../assets/img/logo-teal.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img className="header-logo" src={Logo} alt="logo de deliveroo" />
      </div>
    </header>
  );
};

export default Header;
