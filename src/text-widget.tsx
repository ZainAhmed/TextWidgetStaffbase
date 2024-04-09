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

import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";

/**
 * React Component
 */
export interface TextWidgetProps extends BlockAttributes {
  text: string;
  horizontalalignment: string;
  color: string;
  fontsize: number;
  fontfamily: string;
  bordertype: string;
  bordercolor: string;
  borderwidth: number;
  borderradius: number;
  hshadow: number;
  vshadow: number;
  shadowcolor: string;
  margintop: number;
  marginbottom: number;
  marginright: number;
  marginleft: number;
  verticalalignment: string;
  backgroundcolor: string;
  blur: string;
  id: string;
  classnames: string;
  zindex: number;
}

export const TextWidget = ({
  text,
  horizontalalignment,
  color,
  fontsize,
  fontfamily,
  bordertype,
  bordercolor,
  borderwidth,
  borderradius,
  hshadow,
  vshadow,
  shadowcolor,
  margintop,
  marginbottom,
  marginright,
  marginleft,
  paddingtop,
  paddingbottom,
  paddingright,
  paddingleft,
  zindex,
  classnames,
  verticalalignment,
  id,
  backgroundcolor,
  blur,
}: TextWidgetProps): ReactElement => {
  const textStyles = {
    display: "flex",
    alignItems: `${verticalalignment}`,
    justifyContent: `${horizontalalignment}`,
    color: color,
    fontSize: `${fontsize}px`,
    fontFamily: fontfamily,
    border: `${borderwidth}px ${bordertype} ${bordercolor}`,
    borderRadius: `${borderradius}px`,
    zIndex: zindex,
    padding: `${paddingtop}% ${paddingright}% ${paddingbottom}% ${paddingleft}%`,
    margin: `${margintop}% ${marginright}% ${marginbottom}% ${marginleft}%`,
    boxShadow: `${hshadow}px ${vshadow}px ${shadowcolor} ${blur}px`,
    backgroundColor: backgroundcolor,
  };
  return (
    <p style={textStyles} className={classnames} id={id}>
      {text}
    </p>
  );
};
