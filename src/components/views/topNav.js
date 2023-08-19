import { Link, useLocation } from "react-router-dom";
import useDecodeJWT from "../../hooks/useDecodeJWT";
import React from "react";
import SearchBar from "../search/SearchBar";

// Helper function to capitalize the first letter of a string
const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  
const TopNav = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  // get username from decoded JWT
  const decoded = useDecodeJWT();
  const username = decoded?.UserInfo?.username;

  return (
    <>
      <div className="pl-16 pb-4 pt-5 text-xs flex justify-between">
        <div>
          {username}
        {paths.map((path, index) => {
          const subPaths = paths.slice(0, index + 1);
          const linkPath = subPaths.join('/');

          return (
            <React.Fragment key={path}>
              <span className="px-4">{'/'}</span>
              {index === paths.length - 1 ? (
                <Link to={`/${linkPath}`} className="font-bold">
                  {capitalizeFirstLetter(path)}
                </Link>
              ) : (
                <Link to={`/${linkPath}`}>
                  {capitalizeFirstLetter(path)}
                </Link>
              )}
            </React.Fragment>
          );
        })}
        </div>
        {/* <!-- Search Bar --> */}
        <SearchBar/>
      </div>

    </>
  );
};

export default TopNav;
