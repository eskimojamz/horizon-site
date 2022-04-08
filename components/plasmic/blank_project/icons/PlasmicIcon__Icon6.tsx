// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 45"}
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

      <rect
        width={"20"}
        height={"20"}
        rx={"3"}
        fill={"currentColor"}
        fillOpacity={".9"}
      ></rect>

      <rect
        x={"26"}
        width={"20"}
        height={"20"}
        rx={"3"}
        fill={"currentColor"}
        fillOpacity={".9"}
      ></rect>

      <rect
        y={"25"}
        width={"20"}
        height={"20"}
        rx={"3"}
        fill={"currentColor"}
        fillOpacity={".9"}
      ></rect>

      <rect
        x={"26"}
        y={"25"}
        width={"20"}
        height={"20"}
        rx={"3"}
        fill={"currentColor"}
        fillOpacity={".9"}
      ></rect>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
