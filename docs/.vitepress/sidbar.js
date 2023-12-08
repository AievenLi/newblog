import {set_sidebar} from './set_sidbar'
const web_bar = [
  {
    text:"前端",
    link:"/docs/web/one"
  }
]
const flutter_bar = [
  {
    text:"flutter测试",
    link:"flutter/test"
  },
  {
    text:"flutter测试2",
    link:"flutter/test1"
  }
]


export const sidebar = {
  "/docs/web": web_bar,
  "/flutter":set_sidebar('flutter')
};

// const rust_notes = [
//   {
//     text: "Rust学习笔记",
//     link: "",

//     items: [
//       {
//         text: "关于Rust",
//         link: "/docs/rust/notes/0_introduce/1",
//       },
//       { text: "教程资源", link: "/docs/rust/notes/0_introduce/3" },
//       { text: "快速上手", link: "/docs/rust/notes/0_introduce/2" },
//       {
//         text: "语法基础",
//         link: "",
//         collapsed: true,
//         items: [
//           {
//             text: "变量绑定与解构",
//             link: "/docs/rust/notes/1_elements_of_grammar/1",
//           },
//           {
//             text: "基本类型",
//             link: "/docs/rust/notes/1_elements_of_grammar/2",
//           },
//           {
//             text: "所有权",
//             link: "/docs/rust/notes/1_elements_of_grammar/3",
//           },
//           {
//             text: "复合类型",
//             link: "/docs/rust/notes/1_elements_of_grammar/4",
//           },
//           {
//             text: "流程控制",
//             link: "/docs/rust/notes/1_elements_of_grammar/5",
//           },
//           {
//             text: "模式匹配",
//             link: "/docs/rust/notes/1_elements_of_grammar/6",
//           },
//           {
//             text: "方法 Method",
//             link: "/docs/rust/notes/1_elements_of_grammar/7",
//           },
//           {
//             text: "泛型和特征",
//             link: "/docs/rust/notes/1_elements_of_grammar/8",
//           }, {
//             text: "集合类型",
//             link: "/docs/rust/notes/1_elements_of_grammar/9",
//           },
//         ],
//       },
//     ],
//   },
// ];