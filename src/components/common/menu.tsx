import React from 'react';
import { bool } from 'prop-types';
import styled from "@emotion/styled"

interface Props {
  open: boolean,
}

const Menu = ({ open, ...props }: Props) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">💁🏻‍♂️</span>
        About us
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">💸</span>
        Pricing
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">📩</span>
        Contact
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export const StyledMenu = styled.nav`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;


export default Menu;
