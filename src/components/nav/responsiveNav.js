import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { elastic as BurgerMenu } from 'react-burger-menu'
import {
    FaHome,
    FaDiceD20,
    FaDraftingCompass
} from 'react-icons/fa'

const burgerMenuStyle = {
    bmBurgerButton: {
        position: 'absolute',
        width: '36px',
        height: '30px',
        right: '36px',
        top: '26px',
    },
    bmBurgerBars: {
        background: '#373a47',
    },
    bmBurgerBarsHover: {
        background: '#a90000',
    },
    bmCrossButton: {
        height: '24px',
        width: '24px',
    },
    bmCross: {
        background: '#bdc3c7',
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    bmMorphShape: {
        fill: '#373a47',
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
    },
    bmItem: {
        display: 'block',
        color: 'white',
        margin: '50% 0',
        textDecoration: 'none',
        letterSpacing: '5px',
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
    },
}

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 1rem;
  display: block;
`

const isMenuOpen = state => state.isOpen

const ResponsiveNav = () => (
    <div id="outer-container">
        <BurgerMenu right onStateChange={isMenuOpen} styles={burgerMenuStyle} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
            <NavLink to='/'><FaHome /> Test</NavLink>
            <NavLink to='/'><FaDiceD20 /> Motto</NavLink>
            <NavLink to='/'><FaDraftingCompass /> Contact</NavLink>
        </BurgerMenu>
    </div>
)

ResponsiveNav.propTypes = {
    siteTitle: PropTypes.string,
}

ResponsiveNav.defaultProps = {
    siteTitle: ``,
}

export default ResponsiveNav
