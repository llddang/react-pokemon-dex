/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, type CSSObject, type Interpolation } from "styled-components";

export type Breakpoints = "sm" | "md" | "lg";

export const breakpoints: Record<Breakpoints, string> = {
  sm: "@media (max-width: 640px)",
  md: "@media (min-width: 640px)",
  lg: "@media (min-width: 1024px)",
} as const;

const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<object>[]
    ) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<Breakpoints, any>;

export default media;
