import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Media from "react-media"
import HeaderLogo from '../images/headerLogo.png'
import DesktopNav from './nav/desktopNav'
import ResponsiveNav from './nav/responsiveNav'

const Container = styled.header`
  border-bottom: 2px solid black;
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 1060px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
  align-content: center;
`

const HeaderLogoLink = styled(Link)`
  margin: 0;
  flex: 1;
`

const Nav = styled.nav`
 flex: 1;
 text-align: right;
`


const Header = () => (
  <Container>
    <Inner>
      <HeaderLogoLink to="/">
        <img src={HeaderLogo} alt="Logo" />
      </HeaderLogoLink>
      <Nav>
        <Media query="(max-width: 880px)">
          {matches => (matches ? <ResponsiveNav /> : <DesktopNav />)}
        </Media>
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
