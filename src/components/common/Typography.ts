import media from "@/styles/media";
import styled, { css } from "styled-components";

const typographyStyles = {
  base: css`
    margin: 0;
  `,
  variants: {
    h1: css`
      font-size: 1.875rem;
      font-weight: 700;
      ${media.md`
        font-size: 2.125rem;
    `}
    `,
    h2: css`
      font-size: 1.5rem;
      font-weight: 700;
      ${media.md`
        font-size: 1.875rem;
    `}
    `,
    h3: css`
      font-size: 1.25rem;
      font-weight: 600;
      ${media.md`
        font-size: 1.5rem;
    `}
    `,
    h4: css`
      font-size: 1rem;
      font-weight: 600;
      ${media.md`
        font-size: 1.25rem;
    `}
    `,
    body: css`
      font-size: 1rem;
      font-weight: 400;
    `,
    caption: css`
      font-size: 0.75rem;
      font-weight: 300;
    `,
  },
} as const;

interface TypographyProps {
  $variant?: keyof typeof typographyStyles.variants;
}

const Typography = styled.p<TypographyProps>`
  ${typographyStyles.base}
  ${({ $variant = "body" }) => typographyStyles.variants[$variant]};
`;
export default Typography;
