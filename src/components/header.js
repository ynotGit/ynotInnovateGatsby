import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import HeaderLogo from '../images/headerLogo.png'

const Container = styled.header`
  background: rebeccapurple;
  margin-bnottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 1060px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
  align-content: center;
`

const Heading = styled(Link)`
  margin: 0;
  flex: 1;
`

const Nav = styled.nav`
 flex: 1;
 text-align: right;
`

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 1rem;
  color: white;
`


const Header = () => (
  <Container>
    <Inner>
      <Heading to="/">
        <img src={HeaderLogo} alt="Logo" />
      </Heading>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Motto</NavLink>
        <NavLink to="/">Projects</NavLink>
      </Nav>
    </Inner>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
