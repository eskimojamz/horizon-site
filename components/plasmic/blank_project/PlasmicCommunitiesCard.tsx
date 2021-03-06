// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: akQUwPYY2eStENCEGYmmQw
// Component: vGOs3aFqqn
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
import sty from "./PlasmicCommunitiesCard.module.css"; // plasmic-import: vGOs3aFqqn/css

export type PlasmicCommunitiesCard__VariantMembers = {};

export type PlasmicCommunitiesCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicCommunitiesCard__VariantsArgs;
export const PlasmicCommunitiesCard__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCommunitiesCard__ArgsType = {
  imageSrc?: string;
  communitiesCardLabel?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCommunitiesCard__ArgsType;
export const PlasmicCommunitiesCard__ArgProps = new Array<ArgPropType>(
  "imageSrc",
  "communitiesCardLabel"
);

export type PlasmicCommunitiesCard__OverridesType = {
  root?: p.Flex<"div">;
  communitiesCardLabel?: p.Flex<"div">;
};

export interface DefaultCommunitiesCardProps {
  imageSrc?: string;
  communitiesCardLabel?: React.ReactNode;
  className?: string;
}

function PlasmicCommunitiesCard__RenderFunc(props: {
  variants: PlasmicCommunitiesCard__VariantsArgs;
  args: PlasmicCommunitiesCard__ArgsType;
  overrides: PlasmicCommunitiesCard__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    true ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root
        )}
      >
        <div
          data-plasmic-name={"communitiesCardLabel"}
          data-plasmic-override={overrides.communitiesCardLabel}
          className={classNames(projectcss.all, sty.communitiesCardLabel)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Queens",
            value: args.communitiesCardLabel,
            className: classNames(sty.slotTargetCommunitiesCardLabel)
          })}
        </div>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "communitiesCardLabel"],
  communitiesCardLabel: ["communitiesCardLabel"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  communitiesCardLabel: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCommunitiesCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCommunitiesCard__VariantsArgs;
    args?: PlasmicCommunitiesCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCommunitiesCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCommunitiesCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCommunitiesCard__ArgProps,
      internalVariantPropNames: PlasmicCommunitiesCard__VariantProps
    });

    return PlasmicCommunitiesCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCommunitiesCard";
  } else {
    func.displayName = `PlasmicCommunitiesCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCommunitiesCard = Object.assign(
  // Top-level PlasmicCommunitiesCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    communitiesCardLabel: makeNodeComponent("communitiesCardLabel"),

    // Metadata about props expected for PlasmicCommunitiesCard
    internalVariantProps: PlasmicCommunitiesCard__VariantProps,
    internalArgProps: PlasmicCommunitiesCard__ArgProps
  }
);

export default PlasmicCommunitiesCard;
/* prettier-ignore-end */
