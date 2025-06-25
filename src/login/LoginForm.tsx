import { FormProvider } from '../shared/form/FormProvider.tsx';
import styles from './LoginForm.module.css';
import { Field } from '../shared/form/Field.tsx';
import type { LoginDto } from './LoginView.tsx';



interface LoginFormProps {
  initialValues: LoginDto;
  submit: (formData: LoginDto) => void;
}

export default function LoginForm({ initialValues, submit }: LoginFormProps) {
  function onSubmit(formData: LoginDto) {
    submit({...formData});
  }

  return (
    <>
      <p className={styles.loginFormTitle}>Sign in</p>

      <FormProvider
        initialValues={initialValues}
        submit={onSubmit}
      >
        <Field name={'email'} label={'email'} type={'email'} />
        <Field name={'password'} label={'password'} type={'password'} />
      </FormProvider>
    </>
  )
}