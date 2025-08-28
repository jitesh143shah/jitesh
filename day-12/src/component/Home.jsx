import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/about");
    }, 3000);
    return () => clearTimeout(timer);
  });
  return (
    <>
      <div className="bg-slate-300 w-screen h-screen">
        <nav className="bg-blue-300 h-32 items-center flex justify-evenly test-2xl">
          <Link to={"/"}>
            <h2>Logo</h2>
          </Link>
          <div className="flex gap-10">
            <Link to={"/function"}>
              <h2>Function Component</h2>
            </Link>
            <Link to={"/class"}>
              <h2>Class Component</h2>
            </Link>
            <Link to={"/contact"}>
              <h2>Contact</h2>
            </Link>
            <Link to={"/function"}>
              <h2>FunctionCom</h2>
            </Link>
            <Link to={"/class"}>
              <h2>ClassCom</h2>
            </Link>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default Home;
