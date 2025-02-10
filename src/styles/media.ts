/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, type CSSObject, type Interpolation } from "styled-components";

export type Breakpoints = "sm" | "md" | "lg" | "mobileHeight";

export const breakpoints: Record<Breakpoints, string> = {
  sm: "max-width: 640px",
  md: "min-width: 640px",
  lg: "min-width: 1024px",
  mobileHeight: "max-height: 640px",
} as const;

const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<object>[]
    ) => css`
      @media (${value}) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<Breakpoints, any>;

export default media;
