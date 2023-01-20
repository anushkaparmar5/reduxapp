import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
    <Link to="/service">service</Link>
    <Link to="/about">about</Link>
    <Outlet/>
    </>
  )
}

export default Layout