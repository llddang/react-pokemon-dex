import Button, { ButtonProps } from "@/components/common/Button";

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonProps;
export default function ButtonLink({ children, ...props }: ButtonLinkProps) {
  return (
    <Button as="a" {...props}>
      {children}
    </Button>
  );
}
