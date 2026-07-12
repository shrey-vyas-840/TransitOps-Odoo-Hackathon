import * as React from "react";

import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "icon";
}

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-small hover:bg-primary-hover",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-muted",
  ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
  outline:
    "border border-border bg-background text-foreground hover:bg-muted",
};

const sizes = {
  sm: "h-8 gap-2 px-3 text-xs",
  md: "h-10 gap-2 px-4 text-sm",
  icon: "h-10 w-10 p-0",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      isLoading = false,
      loadingText,
      variant = "primary",
      size = "md",
      type = "button",
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      aria-busy={isLoading}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
          {size !== "icon" ? <span>{loadingText ?? children}</span> : null}
        </>
      ) : (
        children
      )}
    </button>
  ),
);

Button.displayName = "Button";
