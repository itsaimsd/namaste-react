import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {}, [btnNameReact]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <img className="h-12 w-12" src={LOGO_URL} alt="Logo" />
          <span className="text-xl font-bold text-gray-800">Food Delivery</span>
        </div>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-lg font-medium text-gray-700">
            <li>
              <span className="text-sm text-green-600">
                Online Status: {onlineStatus ? "✅" : "❌"}
              </span>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/grocery"
                className="hover:text-blue-600 transition duration-200"
              >
                Grocery
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="hover:text-blue-600 transition duration-200"
              >
                Cart
              </Link>
            </li>
          </ul>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;





// import { LOGO_URL } from "../utils/constant";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const Header = () => {
//   const [btnNameReact, setBtnNameReact] = useState("Login");
//   // console.log("Header render");

//   const onlineStatus = useOnlineStatus();

//   // if no dependency array => useEffect is called on every render
//   // if dependency array is emppty => useEffec is called om initial render(just once)
//   // if dependency array is [btnNameReact] => called everytime btnNameReact is updated

//   useEffect(() => {
//     // console.log("useEffect called");
//   }, [btnNameReact]);

//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img className="logo" src={LOGO_URL} />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About Us</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact Us</Link>
//           </li>
//           <li>
//             <Link to="/grocery">Grocery</Link>
//           </li>
//           <li>
//             <Link to="/cart">Cart</Link>
//           </li>
//           <button
//             className="login"
//             onClick={() => {
//               btnNameReact === "Login"
//                 ? setBtnNameReact("Logout")
//                 : setBtnNameReact("Login");
//             }}
//           >
//             {btnNameReact}
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;
