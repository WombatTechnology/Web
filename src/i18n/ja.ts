import flatten from 'flat'

export default flatten({
  "siteMetaData": {
    title: `株式会社ウォンバットテクノロジー`,
    titleTemplate: `株式会社ウォンバットテクノロジー - %s"`,
    url: `https://wombat-tech.com`,
    // TODO: OG差し替え
    image: `/og.png`,
    description: `株式会社ウォンバットテクノロジーのホームページです。`,
    social: {
      twitter: `apole_scheduler`,
    },
  },
  "pages": {
    "index": {
      "about": {
        "subtitle": "わたしたちについて",
        "description": "ウォンバットテクノロジーはUI/UXデザインも含めた一気通貫のWeb、アプリケーション開発を得意とするソフトウェア開発会社です。ユーザーの本質的な課題を見極め、適切なテクノロジーで解決します。"
      },
      "service": {
        "subtitle": "サービス",
        "description": "日程調整ツール「Nitte」を開発、運用しています。",
      },
      "company": {
        "subtitle": "会社情報",
        "info": {
          "companyName": {
            "label": "社名",
            "value": "株式会社ウォンバットテクノロジー"
          },
          "establishmentDate": {
            "label": "設立日",
            "value": "2020/09/01"
          },
          "ceo": {
            "label": "代表取締役",
            "value": "松本和也"
          },
          "place": {
            "label": "所在地",
            "value": "〒150-0002 東京都渋谷区渋谷２丁目１９－１５宮益坂ビルディング６０９"
          }
        }
      },
      "contact": {
        "subtitle": "お問い合わせ",
        "description": "開発のご相談など以下よりお気軽にお問い合わせください。",
        "form": {
          "personName": "お名前",
          "companyName": "会社名",
          "email": "メールアドレス",
          "inquiryContent": "お問い合わせ内容",
          "submit": "送信"
        },
        "modal": {
          "thanksMessage": "お問い合わせありがとうございます。1営業日以内にメールにてご連絡いたします。"
        }
      }
    },
  },
  "services": {
    "detail": "詳細",
    "nitte": {
      "title": "Nitte",
      "description": "複数人調整もカンタン、営業マンのための日程調整サービス",
      "href": "https://site.nitte.app/"
    },
    "nitte-recruit": {
      "title": "Nitte 人材紹介",
      "description": "企業と求職者専用の日程調整ツール",
      "href": "https://site.nitte.app/recruit"
    },
    "sokkuri": {
      "title": "そっくり度診断",
      "description": "2人の顔はどのくらい似てるかをAIが判定してくれるiOS向けのエンタメアプリ。友達や家族とやると盛り上がります。",
      "href": "https://apps.apple.com/jp/app/%E3%81%9D%E3%81%A3%E3%81%8F%E3%82%8A%E5%BA%A6%E8%A8%BA%E6%96%AD-2%E4%BA%BA%E3%81%AE%E9%A1%94%E3%81%AF%E3%81%A9%E3%81%AE%E3%81%8F%E3%82%89%E3%81%84%E4%BC%BC%E3%81%A6%E3%81%84%E3%82%8B/id1516163819"
    },
    "buttons": {
      "downLoad": {
        "upperLabel": "こちらからダウンロードできます",
        "label": "ダウンロード"
      },
      "officialSite": {
        "upperLabel": "詳細はこちら",
        "label": "公式サイトへ"
      }
    }
  }
})