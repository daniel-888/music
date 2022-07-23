import React from "react";
import { Link } from "react-router-dom";

const CopyRight = () => {
  return (
    <div className="d-md-flex align-items-center justify-content-between">
      <ul className="order-md-last">
        <li>
          <Link to="/terms-conditions"></Link>
        </li>
        <li>
          <Link to="/terms-conditions">Security</Link>
        </li>
        <li>
          <Link to="/terms-conditions">Terms</Link>
        </li>
      </ul>

      <p>
        Copyright @{new Date().getFullYear()}{" "}
        <a
          href="https://themeforest.net/user/ib-themes/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          ib-themes
        </a>{" "}
        inc.
      </p>
    </div>
  );
};

export default CopyRight;
