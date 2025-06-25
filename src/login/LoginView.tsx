import LoginForm from './LoginForm.tsx';

export interface LoginDto {
  email: string;
  password: string;
}

export default function LoginView() {
  const initialValues: LoginDto = {
    email: '',
    password: ''
  };

  function signIn(credentials: LoginDto) {

  }

  return (
    <LoginForm initialValues={initialValues} submit={signIn} />
  )
}