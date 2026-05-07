export default {
  "title": "DarkRain 技术博客",
  "description": "技术博客",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/"
      },
      {
        "text": "文章",
        "link": "/articles/"
      },
      {
        "text": "关于",
        "link": "/about"
      },
      {
        "text": "English",
        "link": "/en/"
      }
    ],
    "footer": {
      "message": "<a href=\"https://beian.miit.gov.cn/#/Integrated/index\" target=\"_blank\">ICP备案号：新ICP备2026003366号-1</a>",
      "copyright": ""
    },
    "sidebar": {
      "/articles/": [
        {
          "text": "前端",
          "items": [
            {
              "text": "Vue.js 基础",
              "link": "/articles/vue-basics"
            },
            {
              "text": "React Hooks",
              "link": "/articles/react-hooks"
            }
          ]
        },
        {
          "text": "后端",
          "items": [
            {
              "text": "Node.js API",
              "link": "/articles/node-api"
            },
            {
              "text": "数据库设计",
              "link": "/articles/database-design"
            }
          ]
        }
      ],
      "/en/articles/": [
        {
          "text": "Frontend",
          "items": [
            {
              "text": "Vue.js Basics",
              "link": "/en/articles/vue-basics"
            },
            {
              "text": "React Hooks",
              "link": "/en/articles/react-hooks"
            }
          ]
        },
        {
          "text": "Backend",
          "items": [
            {
              "text": "Node.js API",
              "link": "/en/articles/node-api"
            },
            {
              "text": "Database Design",
              "link": "/en/articles/database-design"
            }
          ]
        }
      ]
    }
  },
  "locales": {
    "root": {
      "label": "中文",
      "lang": "zh-CN"
    },
    "/en/": {
      "label": "English",
      "lang": "en-US",
      "title": "DarkRain Blog",
      "description": "Technical Blog",
      "themeConfig": {
        "nav": [
          {
            "text": "Home",
            "link": "/en/"
          },
          {
            "text": "Articles",
            "link": "/en/articles/"
          },
          {
            "text": "About",
            "link": "/en/about"
          },
          {
            "text": "中文",
            "link": "/"
          }
        ],
        "footer": {
          "message": "<a href=\"https://beian.miit.gov.cn/#/Integrated/index\" target=\"_blank\">ICP备案号：新ICP备2026003366号-1</a>",
          "copyright": ""
        }
      }
    }
  }
}