import media from "@/styles/media";
import { ThemeColors } from "@/styles/theme";
import styled, { css } from "styled-components";

const buttonStyles = {
  base: css`
    border-radius: var(--radius-xl);
    cursor: pointer;
    transition: all 0.2s;
  `,
  variants: {
    solid: (color: ThemeColors) => css`
      background-color: ${({ theme }) => theme.colors[color]};
      color: white;
      border: none;
      &:hover {
        background-color: ${({ theme }) =>
          theme.colors[`${color}Hover` as ThemeColors]};
      }
    `,
    outline: (color: ThemeColors) => css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors[color]};
      border: 2px solid currentColor;
      &:hover {
        background-color: ${({ theme }) => theme.colors[color]};
        color: white;
      }
    `,
  },
  sizes: {
    sm: css`
      padding: 0.125rem 0.5rem;
      font-size: 0.75rem;
    `,
    md: css`
      padding: 0.125rem 0.75rem;
      font-size: 1rem;
    `,
    lg: css`
      padding: 0.25rem 1rem;
      font-size: 1.25rem;
      font-weight: 600;
      ${media.md`
          font-size: 1.5rem;
      `}
    `,
  },
} as const;

export interface ButtonProps {
  $variant?: keyof typeof buttonStyles.variants;
  $size?: keyof typeof buttonStyles.sizes;
  $color?: ThemeColors;
}

const Button = styled.button<ButtonProps>`
  ${buttonStyles.base}
  ${({ $variant = "solid", $color = "primary" }) =>
    buttonStyles.variants[$variant]($color)}
  ${({ $size = "md" }) => buttonStyles.sizes[$size]}
`;
export default Button;
