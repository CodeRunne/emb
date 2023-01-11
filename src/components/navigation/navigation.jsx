import React from "react";
import { Link } from "react-router-dom";
import navigationLinks from "../../constants/navigation";
import Button from "../button/button";
import MenuItem from "../menu-item/menu-item";

function Navigation() {
  return (
    <nav className="navigation py-6 px-6">
      {/* Navigation Wrapper */}
      <div className="navigation__wrapper w-[93%] flex items-center justify-between mx-auto">
        {/* Navigation Links */}
        <div className="navigation__links flex items-center gap-x-10">
          {/* Navigation Logo */}
          <Link to="/" className="navigation__logo text-3xl font-bold">
            Logos
          </Link>

          {/* Navigation Item */}
          <ul className="navigation__item flex items-center gap-5">
            {navigationLinks.map(({ name, ...otherLinkProps }) => (
              <MenuItem title={name} key={name} {...otherLinkProps} />
            ))}
          </ul>
        </div>

        {/* Navigation Action Buttons */}
        <div className="navigation_a flex gap-1">
          <Button variant="transparent">Log in</Button>
          <Button variant="main">Sign in</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;