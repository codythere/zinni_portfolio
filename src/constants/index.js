import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  nextjs,
  styledComponents,
  moidbank,
  ravenexpressfront,
  ravenexpressbackend,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "關於我",
  },
  {
    id: "projects",
    title: "我的專案",
  },
  {
    id: "contact",
    title: "與我聯繫",
  },
];

const services = [
  {
    title: "網頁程式設計師",
    icon: web,
  },
  {
    title: "前端開發者",
    icon: mobile,
  },
  {
    title: "後端開發者",
    icon: backend,
  },
  {
    title: "內容創作者",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Styled Components",
    icon: styledComponents,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "在校修習網頁相關知識",
    company_name: "世新大學 資訊傳播學系",
    icon: "https://test-for-aws-course-only.s3.ap-southeast-2.amazonaws.com/03.png",
    iconBg: "#d0cccb",
    date: "2018 9月 - 2022 6月",
    points: [
      "學習網頁發展、技術發展相關歷史",
      "瞭解適合入門的程式語言和相關生產工具",
      "理解基礎的語法邏輯和基本概念",
      "學習關聯式資料庫和相關概念",
    ],
  },
  {
    title: "從零開始自學",
    company_name: "自學新技能的起點",
    icon: "https://test-for-aws-course-only.s3.ap-southeast-2.amazonaws.com/book.png",
    iconBg: "#d0cccb",
    date: "2023 1月 - 2023 5月",
    points: [
      "學習網頁標準技術、物件導向程式設計、非同步技術",
      "實作和理解版本控制、資料庫(非關聯式為主)",
      "實作驗證、授權等網路安全性技術",
      "學習前後端主流程式語言、框架和相關技術",
      "JS / Node.js (+Express.js) / MongoDB / React / Next.js",
    ],
  },
  {
    title: "持續精進自身技術",
    company_name: "持續學習，不斷成長",
    icon: "https://test-for-aws-course-only.s3.ap-southeast-2.amazonaws.com/project.png",
    iconBg: "#d0cccb",
    date: "2023 5月 - 2023 7月",
    points: [
      "學習資料結構和常見演算法",
      "LeetCoding 解題與複習",
      "實作 AWS 基礎操作、主要功能",
      "熟悉 TypeScript 觀念和實作練習",
      "學習 Tailwind CSS, styled-Conponents 等前端工具",
    ],
  },
  {
    title: "創建個人專案作品集",
    company_name: "獨立製作專案",
    icon: "https://test-for-aws-course-only.s3.ap-southeast-2.amazonaws.com/build.png",
    iconBg: "#d0cccb",
    date: "2023 7月 -  現在",
    points: [
      "製作全端(前台、後台)電商平台 Raven Express",
      "以電子支付為主題，設計純前端網站 Moid Bank",
      "創建個人3D作品集",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Raven Express (前台)",
    description:
      "電商網站的前台，使用者可以輕鬆查找商品並結帳，也可以多加利用過濾查找、願望清單、購物車、商品評論等功能最大化地使用這個網站。",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: ravenexpressfront,
    showcase_link: "https://raven-express-front.vercel.app/",
    source_code_link: "https://github.com/ziynnyiy/raven-express-front",
  },
  {
    name: "Raven Express (後台)",
    description:
      "電商網站的後台，可以讓經過授權的管理員上下架與修改商品、管理分類、設定首頁背景和運費金額、查看營運績效及訂單狀況。",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: ravenexpressbackend,
    showcase_link: "https://raven-express-admin.vercel.app/",
    source_code_link: "https://github.com/ziynnyiy/raven-express-admin",
  },
  {
    name: "Moid Bank",
    description:
      "一個宣傳電子支付品牌的純前端專案，可以讓使用者快速了解企業的形象和特色，並決定是否要向該公司啟用相關服務。",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: moidbank,
    showcase_link: "https://moidbank.netlify.app/",
    source_code_link: "https://github.com/ziynnyiy/project-moidbank",
  },
];

export { services, technologies, experiences, testimonials, projects };
