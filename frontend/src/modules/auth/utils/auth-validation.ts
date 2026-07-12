import type {
  ForgotPasswordFormErrors,
  ForgotPasswordFormValues,
  LoginFormErrors,
  LoginFormValues,
} from "@/modules/auth/types/auth-form";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export function validateEmail(email: string) {
  const normalizedEmail = email.trim();

  if (!normalizedEmail) {
    return "Email is required.";
  }

  if (!EMAIL_PATTERN.test(normalizedEmail)) {
    return "Enter a valid work email address.";
  }

  return undefined;
}

export function validateLoginForm(values: LoginFormValues) {
  const errors: LoginFormErrors = {};
  const emailError = validateEmail(values.email);

  if (emailError) {
    errors.email = emailError;
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = "Password must be at least 8 characters.";
  }

  return errors;
}

export function validateForgotPasswordForm(values: ForgotPasswordFormValues) {
  const errors: ForgotPasswordFormErrors = {};
  const emailError = validateEmail(values.email);

  if (emailError) {
    errors.email = emailError;
  }

  return errors;
}

export function hasFormErrors(errors: Record<string, string | undefined>) {
  return Object.values(errors).some(Boolean);
}
