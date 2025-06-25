// Field.tsx -----------------------------------------------------------------
import React, { type InputHTMLAttributes, memo, useRef } from 'react';
import { useFormField } from './useFormField.ts';

interface FieldProps<
  T extends Record<string, unknown>,
> {
  name: keyof T;
  label: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
}

function FieldInner<
  T extends Record<string, unknown>,
  K extends keyof T = keyof T,
>({ name, label, type = 'text' }: FieldProps<T>) {
  const [value, setValue] = useFormField<T, K>(name);
  const inputRef = useRef<HTMLInputElement | null>(null);


  return (
    <div style={{ display:'contents', marginBottom: '0.5rem' }}>
      <label style={{ display: 'block' }}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        value={String(value ?? '')}
        onChange={e => setValue(e.target.value as unknown as T[K])}
      />
    </div>
  );
}

export const Field = memo(FieldInner) as typeof FieldInner;
