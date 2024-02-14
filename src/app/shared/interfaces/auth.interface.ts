import { FormIsSubmiting, PasswordCheck } from '../helpers/form.helper';

enum AuthStep {
  ForgotPassword = 'forgotPassword',
  Login = 'login',
  Twofa = 'twofa',
  SecretQuestion = 'secretQuestion',
}

type AuthForm = { rememberMe?: boolean } & FormIsSubmiting;
type ChangePasswordForm = PasswordCheck & FormIsSubmiting;
type ResetPasswordForm = PasswordCheck & FormIsSubmiting;

export { AuthStep, AuthForm, ChangePasswordForm, ResetPasswordForm };
