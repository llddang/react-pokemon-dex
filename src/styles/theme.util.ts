import { css } from "styled-components";

export function getBorderRadius(size: "sm" | "md" | "lg") {
  return css`
    border-radius: ${({ theme }) => theme.borderRadius[size]};
  `;
}
