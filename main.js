// console.log("mini-react");

// v1
// const dom = document.createElement("div");
// dom.id = "app";
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = "app";
// dom.append(textNode);

// v2 type props children

// const elText = {
//   type: "TEXT_ELEMENT",
//   props: {
//     nodeValue: "app",
//     children: [],
//   },
// };

// const dom = document.createElement(App.type);
// dom.id = App.props.id;
// document.querySelector("#root").append(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = elText.props.nodeValue;
// dom.append(textNode);

// v3

// const elText = createTextNode("app");

// render(App, document.querySelector("#root"));

import ReactDom from "./vite-runner/core/ReactDom.js";
// 浏览器不支持 jsx 类型文件，所以需要依赖外部工具，例如webpack、vite、babel等。本项目采用当前最火的 vite
import App from "./App.jsx";

ReactDom.createRoot(document.querySelector("#root")).render(App);

console.log("finally version");
