import styled from "styled-components";

interface IconButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "children"> {
  icon: React.ReactNode;
}

export default function IconButton({ icon, ...props }: IconButtonProps) {
  return <IconButtonLayout {...props}>{icon}</IconButtonLayout>;
}

const IconButtonLayout = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  border-radius: 100%;
  > svg {
    width: 100%;
    height: 100%;
  }
`;
