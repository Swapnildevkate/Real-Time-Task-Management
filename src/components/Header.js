import React from 'react'
import {Link} from "react-router-dom";


export default function Header() {
  return (
    <div>
      <div>
      <nav
        className="navbar bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div className="container">
          <Link href={"/"} className="navbar-brand">Task Management</Link>
          <Link
            href={"/login"}
            className="btn btn-outline-success"
            type="submit"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
    </div>
  )
}
