import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { AuthField } from "@/modules/auth/components/auth-field";
import { AuthLayout } from "@/modules/auth/components/auth-layout";
import type {
  ForgotPasswordFormErrors,
  ForgotPasswordFormValues,
} from "@/modules/auth/types/auth-form";
import {
  hasFormErrors,
  validateForgotPasswordForm,
} from "@/modules/auth/utils/auth-validation";

const INITIAL_VALUES: ForgotPasswordFormValues = {
  email: "",
};

export function ForgotPasswordPage() {
  const [values, setValues] =
    useState<ForgotPasswordFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ForgotPasswordFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  function updateEmail(email: string) {
    setValues({ email });

    if (errors.email) {
      setErrors({});
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage(null);

    const nextErrors = validateForgotPasswordForm(values);
    setErrors(nextErrors);

    if (hasFormErrors(nextErrors)) {
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage(
        "Mock reset request complete. No email was sent and no backend was called.",
      );
    }, 900);
  }

  return (
    <AuthLayout
      title="Reset password"
      description="Enter your work email to review the password reset experience."
    >
      <form className="space-y-5" noValidate onSubmit={handleSubmit}>
        <AuthField
          autoComplete="email"
          error={errors.email}
          helperText="Password recovery is mocked for UI validation only."
          id="reset-email"
          inputMode="email"
          label="Work email"
          placeholder="name@company.com"
          type="email"
          value={values.email}
          onChange={(event) => updateEmail(event.target.value)}
        />

        {statusMessage ? (
          <p
            className="rounded-md border border-success/30 bg-success/10 px-3 py-2 text-sm text-success"
            role="status"
          >
            {statusMessage}
          </p>
        ) : null}

        <Button
          className="w-full"
          isLoading={isSubmitting}
          loadingText="Sending reset link"
          type="submit"
        >
          Send reset link
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Remember your password?{" "}
          <Link
            className="font-medium text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            to="/login"
          >
            Back to sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
