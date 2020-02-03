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
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
`

const Heading = styled.h1`
  margin: 0;
  flex: 1;
`

const HeadingLink = styled(Link)`
  
`

const Nav = styled.nav`
 flex: 1;
 text-align: right;
`

const NavLink = styled(Link)`
  
`


const Header = () => (
  <Container>
    <Inner>
      <Heading>
        <HeadingLink to="/">
          <img src={HeaderLogo} alt="Logo" />
        </HeadingLink>
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
