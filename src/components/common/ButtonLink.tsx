import Button, { ButtonProps } from "@/components/common/Button";
import { Link, LinkProps } from "react-router-dom";

type ButtonLinkProps = LinkProps & ButtonProps;
export default function ButtonLink({ children, ...props }: ButtonLinkProps) {
  return (
    <Button as={Link} {...props}>
      {children}
    </Button>
  );
}
