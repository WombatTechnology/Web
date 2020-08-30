import React, { CSSProperties } from "react"
import { FormattedMessage } from "react-intl"
import styled from "@emotion/styled"

// i18n対応のDescriptionオブジェクト
interface Props {
  id: string,
  style?: CSSProperties
}

export const Heading = ({ id, style, ...props }: Props) => (
  <HeadingStyle style={style} {...props}>
    <FormattedMessage id={id} />
  </HeadingStyle>
)

export const HeadingStyle = styled.p`
  font-weight: 800;
  font-size: 50px;
  height: 75px;
`

export const Description = ({ id, style, ...props }: Props) => (
  <DescriptionStyle style={style} {...props}>
    <FormattedMessage id={id} />
  </DescriptionStyle>
)

const DescriptionStyle = styled.p`
  font-weight: 600;
  font-size: 20px;
`

export const SubTitle = ({ id, style, ...props }: Props) => (
  <SubTitleStyle style={style} {...props}>
    <FormattedMessage id={id} />
  </SubTitleStyle>
)

export const SubTitleStyle = styled.span`
  font-weight: 600;
  font-size: 20px;
`

export const SmallDescription = ({ id, ...props }: Props) => (
  <SmallDescriptionStyle>
    <FormattedMessage id={id} />
  </SmallDescriptionStyle>
)

export const SmallDescriptionStyle = styled.p`
  font-size: 14px;
`
