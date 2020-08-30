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
            "value": "1,000,000"
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
  }
})