import type { InputHTMLAttributes } from "react";

import { Input } from "@/components/ui/input";

interface AuthFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  helperText?: string;
  label: string;
}

export function AuthField({
  error,
  helperText,
  id,
  label,
  ...props
}: AuthFieldProps) {
  const helperId = helperText ? `${id}-helper` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const descriptionIds = [helperId, errorId].filter(Boolean).join(" ");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground" htmlFor={id}>
        {label}
      </label>
      <Input
        id={id}
        hasError={Boolean(error)}
        aria-describedby={descriptionIds || undefined}
        {...props}
      />
      {helperText ? (
        <p className="text-xs text-muted-foreground" id={helperId}>
          {helperText}
        </p>
      ) : null}
      {error ? (
        <p className="text-xs font-medium text-destructive" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
