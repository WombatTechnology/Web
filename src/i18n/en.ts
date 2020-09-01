import flatten from 'flat'

export default flatten({
  "pages": {
    "index": {
      "about": {
        "subtitle": "about us",
        "description": "Wombat Technology is a software development company that specializes in web service and native application development including UI/UX design. We don't just build them, we identify the essential issues of the users and help them to solve those issues with the right technology"
      },
      "service": {
        "subtitle": "service",
        "description": "From web application to native application development in any language or framework. We take care of app and web service development including design.",
        "items": {
          "app": {
            "title": "App development",
            "description": "We plan and develop smartphone apps."
          },
          "web": {
            "title": "Web development",
            "description": "Develop web systems, including back-end development."
          },
          "uiUx": {
            "title": "UI/UX Design",
            "description": "Create an easy-to-use user experience."
          }
        }
      },
      "works": {
        "subtitle": "achievements",
        "description": "From web application to native application development in any language or framework. We undertake app and web service development, including design."
      },
      "company": {
        "subtitle": "Company information",
        "info": {
          "companyName": {
            "label": "Company name",
            "value": "Wombat Technology Inc."
          },
          "capital": {
            "label": "Capital",
            "value": "1,000,000 JPY"
          },
          "establishmentDate": {
            "label": "Establishment date",
            "value": "2020/09/01"
          },
          "ceo": {
            "label": "Representative director",
            "value": "Kazuya Matsumoto"
          },
          "place": {
            "label": "Location",
            "value": "Iago Building 4F, 3-12-1 Higashi Ueno, Taito-ku, Tokyo, 110-0015, Japan"
          }
        }
      },
      "contact": {
        "subtitle": "Contact Us",
        "description": "Please feel free to contact us below to discuss your development needs.",
        "form": {
          "personName": "your name",
          "companyName": "company name",
          "email": "email address",
          "inquiryContent": "Inquiry Content",
          "submit": "Send"
        },
        "modal": {
          "thanksMessage": "Thank you for your inquiry and we will contact you via email within one business day."
        }
      }
    }
  },
  "works": {
    "detail": "詳細",
    "apole": {
      "title": "apole",
      "description": "A keyboard application for iOS that allows users to input text, view and create appointments while viewing messages on Messenger Apps. Originally a product developed by CEO Matsumoto.",
      "href": "https://apps.apple.com/app/apole-keyboard-calendar/id1500285877"
    },
    "sokkuri": {
      "title": "AI Face Match",
      "description": "This is an entertainment app for iOS that allows the AI to determine how similar two people's faces are to each other. It's a lot of fun to do with friends and family.",
      "href": "https://apps.apple.com/app/%E3%81%9D%E3%81%A3%E3%81%8F%E3%82%8A%E5%BA%A6%E8%A8%BA%E6%96%AD-2%E4%BA%BA%E3%81%AE%E9%A1%94%E3%81%AF%E3%81%A9%E3%81%AE%E3%81%8F%E3%82%89%E3%81%84%E4%BC%BC%E3%81%A6%E3%81%84%E3%82%8B/id1516163819"
    },
    "persona": {
      "title": "PERSONA!(α)",
      "description": "A service that allows you to directly interview personas for new services and marketing.",
      "href": "https://persona-app.studio.design/"
    },
    "buttons": {
      "downLoad": {
        "upperLabel": "Download from here",
        "label": "Download"
      },
      "officialSite": {
        "upperLabel": "Details here",
        "label": "Official Site"
      }
    }
  }
})