import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { AuthField } from "@/modules/auth/components/auth-field";
import { AuthLayout } from "@/modules/auth/components/auth-layout";
import type {
  LoginFormErrors,
  LoginFormValues,
} from "@/modules/auth/types/auth-form";
import {
  hasFormErrors,
  validateLoginForm,
} from "@/modules/auth/utils/auth-validation";

const INITIAL_VALUES: LoginFormValues = {
  email: "",
  password: "",
};

export function LoginPage() {
  const [values, setValues] = useState<LoginFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  function updateField(field: keyof LoginFormValues, value: string) {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [field]: undefined,
      }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage(null);

    const nextErrors = validateLoginForm(values);
    setErrors(nextErrors);

    if (hasFormErrors(nextErrors)) {
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage("Mock sign in complete. Authentication logic is not connected.");
    }, 900);
  }

  return (
    <AuthLayout
      title="Sign in"
      description="Access the TransitOps ERP workspace with your organization account."
    >
      <form className="space-y-5" noValidate onSubmit={handleSubmit}>
        <AuthField
          autoComplete="email"
          error={errors.email}
          id="email"
          inputMode="email"
          label="Work email"
          placeholder="name@company.com"
          type="email"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
        />

        <AuthField
          autoComplete="current-password"
          error={errors.password}
          helperText="Use at least 8 characters."
          id="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          value={values.password}
          onChange={(event) => updateField("password", event.target.value)}
        />

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-muted-foreground">
            <input
              className="h-4 w-4 rounded border-input text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              type="checkbox"
            />
            Remember this device
          </label>
          <Link
            className="font-medium text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            to="/forgot-password"
          >
            Forgot password?
          </Link>
        </div>

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
          loadingText="Signing in"
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </AuthLayout>
  );
}
