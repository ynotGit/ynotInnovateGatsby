import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

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

const Nav = styled.ul`

`

const NavUl = styled.ul`
list-style-type: none;
`

const NavLi = styled.li`

`

const HeadingLink = styled(Link)`
  color: white;
  textDecoration: none;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Inner>
      <Heading>
        <HeadingLink to="/">
          {siteTitle}
        </HeadingLink>
      </Heading>
      <Nav>
        <NavUl>
          <NavLi>Home</NavLi>
          <NavLi>Motto</NavLi>
          <NavLi>Projects</NavLi>
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
