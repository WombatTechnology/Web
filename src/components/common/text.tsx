import React, { CSSProperties } from "react"
import { FormattedMessage } from "react-intl"
import styled from "@emotion/styled"

// i18n対応のDescriptionオブジェクト
interface Props {
  id: string,
  style: CSSProperties
}

export const Description = ({ id, style, ...props }: Props) => (
  <DescriptionStyle style={style} {...props}>
    <FormattedMessage id={id} />
  </DescriptionStyle>
)

const DescriptionStyle = styled.p`
  font-weight: 600;
  font-size: 20px;
`

export const SubTitle = ({ id, ...props }: Props) => (
  <SubTitleStyle>
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
