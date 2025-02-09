import media from "@/styles/media";
import { ThemeColors } from "@/styles/theme";
import styled, { css } from "styled-components";

const buttonStyles = {
  base: css`
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
    ghost: (color: ThemeColors) => css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors[color]};
      border: none;
      &:hover {
        background-color: ${({ theme }) =>
          theme.colors[`${color}Hover` as ThemeColors]};
        color: white;
      }
    `,
  },
  sizes: {
    sm: css`
      padding: 4px 8px;
      font-size: 0.875rem;
      border-radius: var(--radius-sm);
    `,
    md: css`
      padding: 4px 12px;
      font-size: 1rem;
      border-radius: var(--radius-lg);
    `,
    lg: css`
      padding: 4px 16px;
      font-size: 1.25rem;
      font-weight: 600;
      ${media.md`
          font-size: 1.5rem;
      `}
      border-radius: var(--radius-xl);
    `,
  },
  rounded: {
    sm: css`
      border-radius: var(--radius-sm);
    `,
    md: css`
      border-radius: var(--radius-md);
    `,
    lg: css`
      border-radius: var(--radius-lg);
    `,
    xl: css`
      border-radius: var(--radius-xl);
    `,
  },
} as const;

export interface ButtonProps {
  $variant?: keyof typeof buttonStyles.variants;
  $size?: keyof typeof buttonStyles.sizes;
  $rounded?: keyof typeof buttonStyles.rounded;
  $color?: ThemeColors;
}

const Button = styled.button<ButtonProps>`
  ${buttonStyles.base}
  ${({ $variant = "solid", $color = "primary" }) =>
    buttonStyles.variants[$variant]($color)}
  ${({ $size = "md" }) => buttonStyles.sizes[$size]}
  ${({ $rounded, $size = "md" }) => buttonStyles.rounded[$rounded || $size]}
`;
export default Button;
