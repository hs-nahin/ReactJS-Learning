import "react";
import { useContext } from "react";
import { CountContext } from "../../App";
import NavInside from "../NavInside/NavInside";

const Navbar = () => {
  const countState = useContext(CountContext);
  return (
    <div>
      <button>Navbar Count {countState}</button>
      <NavInside />
    </div>
  );
};

export default Navbar;
