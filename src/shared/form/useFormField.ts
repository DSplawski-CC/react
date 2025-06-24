import { useCallback, useContext, useSyncExternalStore } from 'react';
import { FormCtx, type FormCtxValue } from './form-context.ts';


export function useFormField<T extends Record<string, unknown>,
  K extends keyof T>(name: K) {
  const ctx = useContext<FormCtxValue<T>>(FormCtx);

  const { store } = ctx;

  const value = useSyncExternalStore(
    store.subscribe,
    () => store.getSnapshot()[name],
  );

  const setValue = useCallback((v : T[K]) => store.setField(name, v), [name, store]);
  return [value, setValue] as const;
}