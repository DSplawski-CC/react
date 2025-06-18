export interface FormStore<T extends Record<string, unknown>> {
  getSnapshot: () => Readonly<T>;
  subscribe: (l: Listener) => () => void;
  setField: <K extends keyof T>(key: K, value: T[K]) => void;
  reset: () => void;
}

export type Listener = () => void;

export function createFormStore<T extends Record<string, unknown>>(initial: T): FormStore<T> {
  let state: T = { ...initial };
  const listeners = new Set<Listener>();

  function setField<K extends keyof T>(key: K, value: K[T]) {
    if (state[key] === value) {
      return;
    }

    state = { ...state, [key]: value };
    listeners.forEach(l => l());
  }

  function reset() {
    state = { ...initial };
    listeners.forEach(l => l());
  }

  function getSnapshot() {
    return state;
  }

  function subscribe(listener: Listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  return { getSnapshot, subscribe, setField, reset };
}
