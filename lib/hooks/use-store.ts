import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Hook para manejar la hidratación de stores de Zustand con persist.
 * Retorna false en el servidor y true en el cliente, sin usar useEffect + setState.
 */
export function useHydration(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
