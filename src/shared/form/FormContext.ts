import { createContext } from 'react';

export interface FormCtxValue<T extends Record<string, unknown>> {
  store: FormStore<T>;
}

export const FormCtx = createContext<FormCtxValue<any> | null>(null);