import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Start</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.CREATE}>Create Ad</Link>
      </li>
    </ul>
  </div>
);

export default Nav;
