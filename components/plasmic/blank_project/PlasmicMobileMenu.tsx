// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: akQUwPYY2eStENCEGYmmQw
// Component: 4-SUUavd_8
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: akQUwPYY2eStENCEGYmmQw/projectcss
import sty from "./PlasmicMobileMenu.module.css"; // plasmic-import: 4-SUUavd_8/css

export type PlasmicMobileMenu__VariantMembers = {};

export type PlasmicMobileMenu__VariantsArgs = {};
type VariantPropType = keyof PlasmicMobileMenu__VariantsArgs;
export const PlasmicMobileMenu__VariantProps = new Array<VariantPropType>();

export type PlasmicMobileMenu__ArgsType = {};
type ArgPropType = keyof PlasmicMobileMenu__ArgsType;
export const PlasmicMobileMenu__ArgProps = new Array<ArgPropType>();

export type PlasmicMobileMenu__OverridesType = {
  root?: p.Flex<"div">;
  mobileMenuLink?: p.Flex<"div">;
  mobileMenuLink2?: p.Flex<"div">;
  mobileMenuLink3?: p.Flex<"div">;
  mobileMenuLink4?: p.Flex<"div">;
};

export interface DefaultMobileMenuProps {
  className?: string;
}

function PlasmicMobileMenu__RenderFunc(props: {
  variants: PlasmicMobileMenu__VariantsArgs;
  args: PlasmicMobileMenu__ArgsType;
  overrides: PlasmicMobileMenu__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <div
          data-plasmic-name={"mobileMenuLink"}
          data-plasmic-override={overrides.mobileMenuLink}
          className={classNames(projectcss.all, sty.mobileMenuLink)}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__fnGzZ
            )}
            component={Link}
            platform={"nextjs"}
          >
            {"Communities"}
          </p.PlasmicLink>
        </div>
      ) : null}
      {true ? (
        <div
          data-plasmic-name={"mobileMenuLink2"}
          data-plasmic-override={overrides.mobileMenuLink2}
          className={classNames(projectcss.all, sty.mobileMenuLink2)}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__u1Qks
            )}
            component={Link}
            platform={"nextjs"}
          >
            {"Listings"}
          </p.PlasmicLink>
        </div>
      ) : null}
      {true ? (
        <div
          data-plasmic-name={"mobileMenuLink3"}
          data-plasmic-override={overrides.mobileMenuLink3}
          className={classNames(projectcss.all, sty.mobileMenuLink3)}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___87Ira
            )}
            component={Link}
            platform={"nextjs"}
          >
            {"Agents"}
          </p.PlasmicLink>
        </div>
      ) : null}
      {true ? (
        <div
          data-plasmic-name={"mobileMenuLink4"}
          data-plasmic-override={overrides.mobileMenuLink4}
          className={classNames(projectcss.all, sty.mobileMenuLink4)}
        >
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__d1IcV
            )}
            component={Link}
            platform={"nextjs"}
          >
            {"About Us"}
          </p.PlasmicLink>
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "mobileMenuLink",
    "mobileMenuLink2",
    "mobileMenuLink3",
    "mobileMenuLink4"
  ],
  mobileMenuLink: ["mobileMenuLink"],
  mobileMenuLink2: ["mobileMenuLink2"],
  mobileMenuLink3: ["mobileMenuLink3"],
  mobileMenuLink4: ["mobileMenuLink4"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  mobileMenuLink: "div";
  mobileMenuLink2: "div";
  mobileMenuLink3: "div";
  mobileMenuLink4: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMobileMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMobileMenu__VariantsArgs;
    args?: PlasmicMobileMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMobileMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMobileMenu__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMobileMenu__ArgProps,
      internalVariantPropNames: PlasmicMobileMenu__VariantProps
    });

    return PlasmicMobileMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMobileMenu";
  } else {
    func.displayName = `PlasmicMobileMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicMobileMenu = Object.assign(
  // Top-level PlasmicMobileMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    mobileMenuLink: makeNodeComponent("mobileMenuLink"),
    mobileMenuLink2: makeNodeComponent("mobileMenuLink2"),
    mobileMenuLink3: makeNodeComponent("mobileMenuLink3"),
    mobileMenuLink4: makeNodeComponent("mobileMenuLink4"),

    // Metadata about props expected for PlasmicMobileMenu
    internalVariantProps: PlasmicMobileMenu__VariantProps,
    internalArgProps: PlasmicMobileMenu__ArgProps
  }
);

export default PlasmicMobileMenu;
/* prettier-ignore-end */
