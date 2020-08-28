import React from 'react';
import styled from "@emotion/styled"
import { Heading, mediaMaxWidth, Description } from '../../style';
import { images } from '../common/images';
import Img from "gatsby-image"
import Layout from "../../components/layout"
import PrimaryButton from '../common/primaryButton';

const WorkTemplate = () => {
  return (
    <Layout>
      <Container>
        <HeadingContainer>
          <Heading>apole</Heading>
        </HeadingContainer>
        {/* <Img fixed={[
          images().coverApole.childImageSharp.fixed,
          {
            ...images().coverApole.childImageSharp.fixed,
            media: `(max-width: ${mediaMaxWidth})`,
          }
        ]} /> */}
        <Img fluid={images().coverApole.childImageSharp.fluid} />
        <DetailContainer>
          <Description>詳細</Description>
          <Description style={{ marginTop: "24px" }}>ウォンバットテクノロジーはUI/UXデザインも含め一気通貫のWeb、アプリ開発を得意とするソフトウェア開発会社です。ただ作るのではなくユーザーの本質的な課題を見極め、それらの課題を適切なテクノロジーで解決することをお手伝いします。ウォンバットテクノロジーはUI/UXデザインも含め一気通貫のWeb、アプリ開発を得意とするソフトウェア開発会社です。ただ作るのではなくユーザーの本質的な課題を見極め、それらの課題を適切なテクノロジーで解決することをお手伝いします。</Description>
          <DownloadButton>
            <PrimaryButton
              label="ダウンロード"
              onClick={() => alert("click")}
              upperLabel="こちらからダウンロードできます。"
              style={{ marginTop: "58px" }}
            />
          </DownloadButton>
        </DetailContainer>
      </Container>
    </Layout>
  )
}

const Container = styled.section``
const HeadingContainer = styled.div`
  margin: 16px 0 32px 80px;
  @media (max-width: ${mediaMaxWidth}) {
    margin: 16px 0 32px 20px;
  }
`
const DetailContainer = styled.section`
  padding: 40px 122px;
  @media (max-width: ${mediaMaxWidth}) {
    padding: 40px 24px;
  }
`
const DownloadButton = styled.section`
  @media (max-width: ${mediaMaxWidth}) {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default WorkTemplate