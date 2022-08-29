// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: a8YFUxgfWi7wVnE4zUTdHu
// Component: la6dku6osJKV
import * as React from "react";

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
import Button from "../../Button"; // plasmic-import: P_Sp_1dQVxN/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: a8YFUxgfWi7wVnE4zUTdHu/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: la6dku6osJKV/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: RgzVS264hj5/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: WOPiH_ZD-nn/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  freeBox?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  search?: p.Flex<typeof Button>;
  go?: p.Flex<typeof Button>;
  searchingBox?: p.Flex<"div">;
};

export interface DefaultHomepageProps {
  className?: string;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
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
            sty.root
          )}
        >
          <h1
            data-plasmic-name={"h1"}
            data-plasmic-override={overrides.h1}
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1
            )}
          >
            {"Home Page"}
          </h1>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__oRLvN
            )}
          >
            <React.Fragment>
              <React.Fragment>
                {
                  "If you haven't already done so, go back and learn the basics by going through the Plasmic Levels tutorial.\n\nIt's always easier to start from examples! Add a new page using a template—do this from the list of pages in the top left (the gray + button).\n\nOr press the big blue + button to start dragging items into this page.\n\nIntegrate this project into your codebase—press the "
                }
              </React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"Code"}
              </span>
              <React.Fragment>
                {
                  " button in the top right and follow the quickstart instructions.\n\nJoin our Slack community (icon in bottom left) for help any time."
                }
              </React.Fragment>
            </React.Fragment>
          </div>

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          />

          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column__gRzv)}>
              <Button
                data-plasmic-name={"search"}
                data-plasmic-override={overrides.search}
                className={classNames("__wab_instance", sty.search)}
              >
                {"Search"}
              </Button>
            </div>

            <div className={classNames(projectcss.all, sty.column__mcsrE)}>
              <Button
                data-plasmic-name={"go"}
                data-plasmic-override={overrides.go}
                className={classNames("__wab_instance", sty.go)}
                link={"/new-customer" as const}
              >
                {"Go"}
              </Button>
            </div>
          </div>

          <div
            data-plasmic-name={"searchingBox"}
            data-plasmic-override={overrides.searchingBox}
            className={classNames(projectcss.all, sty.searchingBox)}
          >
            {true ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jzsQ4
                )}
              >
                {"Searching..."}
              </div>
            ) : null}
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "freeBox", "columns", "search", "go", "searchingBox"],
  h1: ["h1"],
  freeBox: ["freeBox"],
  columns: ["columns", "search", "go"],
  search: ["search"],
  go: ["go"],
  searchingBox: ["searchingBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  freeBox: "div";
  columns: "div";
  search: typeof Button;
  go: typeof Button;
  searchingBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    freeBox: makeNodeComponent("freeBox"),
    columns: makeNodeComponent("columns"),
    search: makeNodeComponent("search"),
    go: makeNodeComponent("go"),
    searchingBox: makeNodeComponent("searchingBox"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
