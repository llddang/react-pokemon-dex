import { css } from "styled-components";

export function getFontSize(size: "xs" | "sm" | "md" | "lg" | "xl") {
  return css`
    font-size: ${({ theme }) => theme.fontSize.mobile[size]};

    ${({ theme }) => theme.media.tablet} {
      font-size: ${({ theme }) => theme.fontSize.tablet[size]};
    }

    ${({ theme }) => theme.media.laptop} {
      font-size: ${({ theme }) => theme.fontSize.laptop[size]};
    }
  `;
}

export function getBorderRadius(size: "sm" | "md" | "lg") {
  return css`
    border-radius: ${({ theme }) => theme.borderRadius[size]};
  `;
}
