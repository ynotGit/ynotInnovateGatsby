import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import FooterLogo from '../images/footerLogo.png'

const Container = styled.footer`
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

const Logo = styled.img`    
    display: block;
`

const Footer = () => (
    <Container>
        <Inner>
            <Logo src={FooterLogo} alt="Logo" />
            <Link to="https://www.ynotinnovate.com">Y Not Innovate©</Link> {new Date().getFullYear()}
        </Inner>
    </Container>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer
