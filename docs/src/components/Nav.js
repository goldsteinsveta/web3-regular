import * as React from "react"
import {
  nav,
  logo
} from './Nav.module.css'

const Nav = () => {
  return (
    <div className={nav}>
      <span className={`buttonText ${logo}`}>
        <b>
          Web3-Regular
        </b>
      </span>
      <a className="button buttonText" target="_blank" href="https://github.com/goldsteinsveta/web3-regular/releases/tag/211210">
        Download
      </a>
      <a className="button buttonText" target="_blank" href="https://github.com/goldsteinsveta/web3-regular/releases/tag/211210">
        GitHub
      </a>
    </div>
  );
}

export default Nav;
