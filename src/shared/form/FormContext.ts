import { createContext } from 'react';
import { createFormStore } from './form-store.ts';

export interface FormCtxValue<T extends Record<string, unknown>> {
  store: FormStore<T>;
}

export const FormCtx = createContext<FormCtxValue>(createFormStore());