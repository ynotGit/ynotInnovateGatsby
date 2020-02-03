import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import HeaderLogo from '../images/headerLogo.png'

const Container = styled.header`
  background: rebeccapurple;
  marginBottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0 auto;
  maxWidth: 960px;
  padding: 1.45rem 1.0875rem;
`

const Heading = styled.h1`
margin: 0
`

const HeadingLink = styled(Link)`
  color: white;
  textDecoration: none;
`
const Nav = styled.nav`

`

const NavUl = styled.ul`
list-style-type: none;
`

const NavLi = styled(Link)`

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
        <NavUl>
          <NavLi to="/">Home</NavLi>
          <NavLi to="/">Motto</NavLi>
          <NavLi to="/">Projects</NavLi>
        </NavUl>
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
