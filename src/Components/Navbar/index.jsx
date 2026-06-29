import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/contact">Contact</Link>
          {/* <li></li> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
