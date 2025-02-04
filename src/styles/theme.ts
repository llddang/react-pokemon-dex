import { breakpoints, fontSize, borderRadius } from "@/styles/theme.config";

export const theme = {
  breakpoints,
  fontSize,
  borderRadius,
  media: {
    mobile: `@media screen and (min-width: ${breakpoints.mobile})`,
    tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
    laptop: `@media screen and (min-width: ${breakpoints.laptop})`,
  },
};
