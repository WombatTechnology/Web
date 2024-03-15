import styled from "@emotion/styled"
import Img from "gatsby-image"
import { useContext, useRef, useState } from "react"
import { IntlContext } from "react-intl"
import ScrollIntoView from 'react-scroll-into-view'
import { useOnClickOutside } from "../../hooks"
import { Colors, mediaMaxWidth } from "../../style"
import { images } from '../common/images'
import LocaleLink from "./localeLink"

interface Props {
  showHeaderMenu: boolean
}
const Header = ({ showHeaderMenu }: Props) => {
  const [open, setOpen] = useState(false);
  const menuId = "main-menu";
  const node = useRef();
  const intl = useContext(IntlContext)

  useOnClickOutside(node, () => setOpen(false));

  return (
    <Background>
      <Container>
        <LocaleLink to={"/"}>
          {
            intl.locale == "ja" ? (
              <Img fixed={
                [
                  images().headerLogoPC.childImageSharp.fixed,
                  {
                    ...images().headerLogoSP.childImageSharp.fixed,
                    media: `(max-width: ${mediaMaxWidth})`,
                  }
                ]} />
            ) : (
              <Img fixed={
                [
                  images().headerLogoENPC.childImageSharp.fixed,
                  {
                    ...images().headerLogoENSP.childImageSharp.fixed,
                    media: `(max-width: ${mediaMaxWidth})`,
                  }
                ]} />
            )
          }
        </LocaleLink>
        {
          showHeaderMenu && (
            <MenuLinks>
              <ScrollIntoView selector="#about">
                <MenuLink>About</MenuLink>
              </ScrollIntoView>
              <ScrollIntoView selector="#service">
                <MenuLink>Service</MenuLink>
              </ScrollIntoView>
              <ScrollIntoView selector="#company">
                <MenuLink>Company</MenuLink>
              </ScrollIntoView>
              <ScrollIntoView selector="#contact">
                <MenuLink>Contact</MenuLink>
              </ScrollIntoView>
            </MenuLinks>
          )
        }
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
  width: 100%;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${mediaMaxWidth}) { padding: 0 }
`
const MenuLinks = styled.div`
  width: 500px;
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