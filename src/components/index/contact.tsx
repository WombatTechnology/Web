import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, Description, SubTitle, SmallDescription, Spacer } from "../../style"
import Section from './section'

const Contact = () => {
  return (
    <Section title="Contact" titleSupplement="お問い合わせ">
      <Description>
        開発のご相談など以下よりお気軽にお問い合わせください。
      </Description>
    </Section>
  )
}

export default Contact