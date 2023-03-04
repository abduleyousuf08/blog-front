import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { UserContext } from "../Utils/UserContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

function Header() {
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const [path, setPath] = useState("");

  //fetching my user based on this token
  useEffect(() => {
    axios
      .get("http://localhost:10000/auth/getUser", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setPath(`http://localhost:10000/${res.data.data.image}`);
      })
      .catch((e) => {
        console.log("from header", e);
      });
  }, []);

  return (
    <div className="flex justify-between bg-white py-4 px-20  border-b-2">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="h-9"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          />
        </Link>
        <div className="ml-3 flex items-center border-2 px-2 rounded-md">
          <input className="p-1.5 w-72" type="text" placeholder="Search" />
          <MdSearch size={25} />
        </div>
      </div>
      {user ? (
        <div className="flex items-center">
          <Link to="/new">
            <button className="border border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700">
              Post Blog
            </button>
          </Link>
          <Link to="/dashboard">
            <div className="h-10 w-10 ml-4">
              <img
                className="rounded-full"
                src={path}
                // src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
              />
            </div>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="mr-3">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="border border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700">
              Create Account
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
