/*!
 * Copyright 2023, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
import { tabs } from "./component/MyFormWithTabs";
/* schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  type: "object",
  properties: {
    [tabs[0].key]: {
      required: ["text"],
      type: "object",
      properties: {
        text: { type: "string", title: "text" },
      },
    },
    [tabs[1].key]: {
      type: "object",
      properties: {
        horizontalalignment: {
          title: "Horizontal alignment",
          type: "string",
          default: "center",
          oneOf: [
            {
              const: "flex-start",
              title: "left",
            },
            {
              const: "center",
              title: "center",
            },
            {
              const: "flex-end",
              title: "right",
            },
          ],
        },
        verticalalignment: {
          title: "Vertical alignment",
          type: "string",
          default: "center",
          oneOf: [
            {
              const: "flex-start",
              title: "left",
            },
            {
              const: "center",
              title: "center",
            },
            {
              const: "flex-end",
              title: "right",
            },
          ],
        },
        color: { type: "string", title: "Text color", default: "#000000" },
        backgroundcolor: {
          type: "string",
          title: "Background ext color",
          default: "#000000",
        },
        fontsize: { type: "integer", title: "Text font size", default: 12 },
        fontfamily: { type: "string", title: "Font size", default: "Arial" },
        bordertype: {
          title: "Border type",
          type: "string",
          default: "solid",
          oneOf: [
            {
              const: "solid",
              title: "solid",
            },
            {
              const: "dashed",
              title: "dashed",
            },
            {
              const: "dotted",
              title: "dotted",
            },
            {
              const: "double",
              title: "double",
            },
            {
              const: "groove",
              title: "groove",
            },
            {
              const: "ridge",
              title: "ridge",
            },
            {
              const: "inset",
              title: "inset",
            },
            {
              const: "outset",
              title: "outset",
            },
          ],
        },
        bordercolor: {
          type: "string",
          title: "Border Color",
          default: "#000000",
        },
        borderwidth: { type: "integer", default: 0 },
        borderradius: { type: "integer", default: 0 },
        hshadow: {
          type: "integer",
          default: 0,
          title: "Box-shadow vertical shadow",
        },
        vshadow: {
          type: "integer",
          default: 0,
          title: "Box-shadow horizontal shadow",
        },
        shadowcolor: {
          type: "string",
          title: "Box-shadow color",
          default: "#000000",
        },
        blur: {
          type: "integer",
          default: 0,
          title: "Box-shadow blur",
        },
      },
    },
    [tabs[2].key]: {
      type: "object",
      properties: {
        margintop: { type: "integer", title: "Top margin", default: 0 },
        marginbottom: { type: "integer", title: "Bottom margin", default: 0 },
        marginright: { type: "integer", title: "Right margin", default: 0 },
        marginleft: { type: "integer", title: "Left margin", default: 0 },
        paddingtop: { type: "integer", title: "Top padding", default: 0 },
        paddingbottom: { type: "integer", title: "Bottom padding", default: 0 },
        paddingright: { type: "integer", title: "Right padding", default: 0 },
        paddingleft: { type: "integer", title: "Left padding", default: 0 },
        zindex: { type: "integer", title: "Z-Index", default: 0 },
        classnames: {
          type: "string",
          title: "Css class selector",
          default: "",
        },
        id: { type: "string", title: "Css id selector", default: "" },
      },
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  [tabs[0].key]: {
    text: {
      "ui:help": "Insert the text",
    },
  },
  [tabs[1].key]: {
    color: {
      "ui:widget": "color",
    },
    backgroundcolor: {
      "ui:widget": "color",
    },
    fontsize: {
      "ui:widget": "updown",
      "ui:help": "The value is in pixels",
    },
    bordercolor: {
      "ui:widget": "color",
    },
    borderwidth: {
      "ui:widget": "updown",
      "ui:help": "The value is in pixels",
    },
    borderradius: {
      "ui:widget": "updown",
      "ui:help": "The value is in pixels",
    },
    hshadow: {
      "ui:widget": "updown",
      "ui:help": "The value is in pixels",
    },
    vshadow: {
      "ui:widget": "updown",
      "ui:help": "The value is in pixels",
    },
    shadowcolor: {
      "ui:widget": "color",
    },
    blur: {
      "ui:widget": "updown",
      "ui:help": "The value is in pixels",
    },
  },
  [tabs[2].key]: {
    margintop: {
      "ui:widget": "updown",
      "ui:help": "The value is in pixels",
    },
    marginbottom: {
      "ui:widget": "updown",
      "ui:help": "The value is in pixels",
    },
    marginright: {
      "ui:widget": "updown",
      "ui:help": "The value is in pixels",
    },
    marginleft: {
      "ui:widget": "updown",
      "ui:help": "The value is in pixels",
    },
    paddingtop: {
      "ui:widget": "updown",
      "ui:help": "The value is in pixels",
    },
    paddingbottom: {
      "ui:widget": "updown",
      "ui:help": "The value is in pixels",
    },
    paddingright: {
      "ui:widget": "updown",
      "ui:help": "The value is in pixels",
    },
    paddingleft: {
      "ui:widget": "updown",
      "ui:help": "The value is in pixels",
    },
  },
};
