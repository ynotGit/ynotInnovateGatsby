import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import styled from "styled-components"

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 1rem;
`


const DesktopNav = () => (
    <Fragment>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Motto</NavLink>
        <NavLink to='/'>Contact</NavLink>
    </Fragment>
)

DesktopNav.propTypes = {
    siteTitle: PropTypes.string,
}

DesktopNav.defaultProps = {
    siteTitle: ``,
}

export default DesktopNav
