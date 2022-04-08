// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 49"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.14 46.705C-11.03 42.18 5.8 14.66 16.863 1.465c3.22-.977 11.551-2.345 19.112 0 7.561 2.346 3.15 28.485 0 41.26.21 3.212-4.662 8.504-25.833 3.98z"
        }
        fill={"currentColor"}
        fillOpacity={".9"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
