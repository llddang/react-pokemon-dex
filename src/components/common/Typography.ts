import media from "@/styles/media";
import styled, { css } from "styled-components";

const variants = {
  h1: css`
    font-size: 1.875rem;
    font-weight: 700;
    ${media.md`
        font-size: 2.125rem;
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
} as const;

type TypographyVariant = keyof typeof variants;

interface TypographyProps {
  $variant?: TypographyVariant;
}

const Typography = styled.p<TypographyProps>`
  margin: 0;
  ${({ $variant = "body" }) => variants[$variant]};
`;

export default Typography;
