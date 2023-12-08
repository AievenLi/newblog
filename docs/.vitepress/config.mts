import { defineConfig } from 'vitepress'
import nav from "./nav"
import {sidebar} from "./sidbar.js"

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "海文的笔记",
  description: "学习笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AievenLi' }
    ]
  }
})
