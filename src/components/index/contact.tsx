import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { Colors, Description, SubTitle, SmallDescription, Spacer } from "../../style"
import Section from './section'
import './contact.css'

const Contact = () => {
  const rawHTML = {
    __html: `
    <!-- Do not change class, action, method. -->
    <form class="formrun" action="https://form.run/api/v1/r/fz4t4f4kdvrz8d3jnwz2pn2u" method="post">
      <!-- ↓You can add/change fields. -->
      <div>
        <input name="NAME" placeholder="お名前" type="text" data-formrun-required>
      </div>

      <div>
        <input name="COMPANY_NAME" placeholder="会社名" type="text" data-formrun-required>
      </div>
    
      <div>
        <input name="EMAIL" placeholder="メールアドレス" type="text" data-formrun-type="email" data-formrun-required>
        <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div>
      </div>
    
      <div>
        <textarea name="CONTENTS" placeholder="お問い合わせ内容"　data-formrun-required></textarea>
        <div data-formrun-show-if-error="お問い合わせ">お問い合わせ入力してください</div>
      </div>
    
      <!-- ボット投稿をブロックするためのタグ -->
      <div class="_formrun_gotcha">
        <style media="screen">._formrun_gotcha {position:absolute!important;height:1px;width:1px;overflow:hidden;}</style>
        <label for="_formrun_gotcha">If you are a human, ignore this field</label>
        <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabindex="-1">
      </div>
    
      <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
    </form>  
  `,
  }
  return (
    <Section id="contact" title="Contact" titleSupplement="お問い合わせ">
      <Description>
        開発のご相談など以下よりお気軽にお問い合わせください。
      </Description>
      <FormContainer>
        <div dangerouslySetInnerHTML={rawHTML} />
      </FormContainer>
    </Section>
  )
}

const FormContainer = styled.section`
  width: 100%;
  margin: 28px auto;
  border-radius: 16px;
  max-width: 600px;
}
`

export default Contact