import { Link } from "gatsby"
import React, { useState, useRef } from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, ContainerWidth, mediaMaxWidth } from "../../style"
import ScrollIntoView from 'react-scroll-into-view'
import { images } from '../common/images'
import FocusLock from 'react-focus-lock';
import Burger from "./burger"
import Menu from "./menu"
import { useOnClickOutside } from "../../hooks"

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuId = "main-menu";
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <Background>
      <Container>
        <a href="/">
          <Img fixed={
            [
              images().headerLogoPC.childImageSharp.fixed,
              {
                ...images().headerLogoSP.childImageSharp.fixed,
                media: `(max-width: ${mediaMaxWidth})`,
              }
            ]} />
        </a>
        <MenuLinks>
          <ScrollIntoView selector="#about">
            <MenuLink>About</MenuLink>
          </ScrollIntoView>
          <ScrollIntoView selector="#service">
            <MenuLink>Service</MenuLink>
          </ScrollIntoView>
          <ScrollIntoView selector="#works">
            <MenuLink>Works</MenuLink>
          </ScrollIntoView>
          <ScrollIntoView selector="#company">
            <MenuLink>Company</MenuLink>
          </ScrollIntoView>
          <ScrollIntoView selector="#contact">
            <MenuLink>Contact</MenuLink>
          </ScrollIntoView>
        </MenuLinks>
        {/* 現状Menuは不要 */}
        {/* <SPMenu>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </SPMenu> */}
      </Container>
    </Background>
  )
}


const Background = styled.header`
  height: 90px;
  background-color: ${Colors.White};
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 4px #ababab38;
  margin-bottom: 4px;
  @media (max-width: ${mediaMaxWidth}) {
    height: 62px;
    padding: 0 20px;
  }
`
const Container = styled.nav`
  width: ${ContainerWidth};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const MenuLinks = styled.div`
  width: 600px;
  height: 27px;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${mediaMaxWidth}) {
    display: none;
  }
`
const MenuLink = styled.a`
  font-size: 18px;
  font-weight: 700;
`
const SPMenu = styled.div`
@media (min-width: ${mediaMaxWidth}) {
  display: none;
}
`


export default Header