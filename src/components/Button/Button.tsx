import React, { type HTMLAttributes, type FC, forwardRef } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return <button {...props} ref={ref} />;
  }
);

Button.displayName = "Button";

export { Button };
