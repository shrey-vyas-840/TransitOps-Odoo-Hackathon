export interface LoginFormValues {
  email: string;
  password: string;
}

export interface ForgotPasswordFormValues {
  email: string;
}

export type LoginFormErrors = Partial<Record<keyof LoginFormValues, string>>;

export type ForgotPasswordFormErrors = Partial<
  Record<keyof ForgotPasswordFormValues, string>
>;
