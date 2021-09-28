import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Hem</Link>
      </li>
      <li>
        <Link to={ROUTES.FIND}>Sök annons</Link>
      </li>
      <li>
        <Link to={ROUTES.CREATE}>Skapa annons</Link>
      </li>
    </ul>
  </div>
);

export default Nav;
