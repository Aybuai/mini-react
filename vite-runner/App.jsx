// js pragma 自定义 react 名字
/**@jsx MReact.createElement */
import MReact from "./core/React.js";

// const App = React.createElement("div", { id: "app" }, "hello ", "mini-react!3");

const App = <div id="app">hello mini-react <div id="haha">haha</div></div>
// console.log(App, 'App')

// function AppOne() {
//   return <div id="app">hello mini-react</div>
// }
// console.log(AppOne, 'AppOne')

export default App;
