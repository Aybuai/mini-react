import React from "./React.js";

const ReactDom = {
  createRoot(container) {
    return {
      render(App) {
        // js作用域，参数柯里化
        React.render(App, container);
      },
    };
  },
};

export default ReactDom;
