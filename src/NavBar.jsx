import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-red-100 rounded-xl w-full">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">API's Data Collection</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>About</a>
            </li>
            <li>
              <details>
                <summary>Collection</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Sample1</a>
                  </li>
                  <li>
                    <a>Sample2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
