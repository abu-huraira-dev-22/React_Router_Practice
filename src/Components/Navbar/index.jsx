import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()

  let name = 'sufiyan'

  function authenticationHandler(){
    if(name == 'sufiyan'){
      navigate('/jobs')
    }else{
      alert(`Sorry ${name}, only sufiyan can go to jobs page`)
    }
  }

  return (
    <>
      <div>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <li onClick={authenticationHandler}>Jobs</li>
          <Link to="/contact">Contact</Link>
          {/* <li></li> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
