import { Link } from "react-router-dom";
import { BiLogOut } from 'react-icons/bi';

const Nav = ({ count , handleLogout }) => {
  const count0 = count;
  return (
    <nav>
      <h2>Ravi Rice</h2>
      <button>
        <Link to="/menu/cart">Cart {count0}</Link>
      </button>
      <BiLogOut onClick={handleLogout} />
    </nav>
  );
};

export default Nav;
