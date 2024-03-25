import React from "../core/React";
import { it, describe, expect } from "vitest";

describe("createElement", () => {
  it("props is null", () => {
    const el = React.createElement("div", null, "hi");

    // expect(el).toEqual({
    //   type: "div",
    //   props: {
    //     children: [
    //       {
    //         type: "TEXT_ELEMENT",
    //         props: {
    //           nodeValue: "hi",
    //           children: [],
    //         },
    //       },
    //     ],
    //   },
    // });

    // 快照测试
    expect(el).toMatchInlineSnapshot(`
      {
        "props": {
          "children": [
            {
              "props": {
                "children": [],
                "nodeValue": "hi",
              },
              "type": "TEXT_ELEMENT",
            },
          ],
        },
        "type": "div",
      }
    `);
  });

  it("should return vdom by createElement", () => {
    const el = React.createElement(
      "div",
      { id: "app" },
      "hello",
      "  mini-react"
    );

    expect(el).toMatchInlineSnapshot(`
      {
        "props": {
          "children": [
            {
              "props": {
                "children": [],
                "nodeValue": "hello",
              },
              "type": "TEXT_ELEMENT",
            },
            {
              "props": {
                "children": [],
                "nodeValue": "  mini-react",
              },
              "type": "TEXT_ELEMENT",
            },
          ],
          "id": "app",
        },
        "type": "div",
      }
    `);
  });
});
