import React, {
  useRef, useMemo, useCallback, type PropsWithChildren,
} from 'react';
import { createFormStore } from './form-store.ts';
import { FormCtx, type FormCtxValue } from './FormContext.ts';



interface FormProviderProps<T extends Record<string, unknown>> extends PropsWithChildren {
  initialValues: T;
  onSubmit?: (data: Readonly<T>) => void;
}

export function FormProvider<T extends Record<string, unknown>>({ initialValues, onSubmit, children }: FormProviderProps<T>) {
  const storeRef = useRef(createFormStore(initialValues));

  const handleSubmit = useCallback(() => {
    const snapshot = storeRef.current.getSnapshot();
    onSubmit?.(snapshot);
    storeRef.current.reset();
  }, [onSubmit]);

  const ctxValue = useMemo<FormCtxValue<T>>(
    () => ({ store: storeRef.current }),
    []
  );

  return (
    <FormCtx value={ctxValue}>
      {children}
      <button onClick={handleSubmit}>Submit</button>
    </FormCtx>
  );
}
