import styled from "@emotion/styled"

export const mediaMaxWidth = '980px'

export enum Colors {
  White = '#ffffff',
  BaseGray = '#F8F8F8',
  TextPlaceholder = '#959595',
  TextGray = '#818181',
  Border = "#DCDCDC"
}

export const SubTitle_18 = styled.p`
  font-weight: 600;
  font-size: 18px;
`
export const SubTitle_18_span = styled.span`
  font-weight: 600;
  font-size: 18px;
`
export const Spacer = styled.div`
  flex-grow: 1;
`

export const Text_14px_gray = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${Colors.TextGray};
`

export const Text_14px = styled.p`
  font-weight: 600;
  font-size: 14px;
`

export const BrForSp = styled.br`
  display: none;
  @media (max-width: ${mediaMaxWidth}) {
    display: block;
  }
`
export const BrForPC = styled.br`
  display: none;
  @media (min-width: ${mediaMaxWidth}) {
    display: block;
  }
`

export const Divider = styled.div`
  height: 1px;
  background-color: ${Colors.Border}
`
export const Heading = styled.p`
  font-weight: 800;
  font-size: 50px;
  height: 75px;
`

export const ContainerWidth = '980px'