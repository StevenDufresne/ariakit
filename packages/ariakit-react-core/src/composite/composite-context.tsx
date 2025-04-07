import { createContext } from "react";
import {
  CollectionContextProvider,
  CollectionScopedContextProvider,
} from "../collection/collection-context.tsx";
import { createStoreContext } from "../utils/system.tsx";
import type { CompositeStore } from "./composite-store.ts";

const ctx = createStoreContext<CompositeStore>(
  [CollectionContextProvider],
  [CollectionScopedContextProvider],
);

/**
 * Returns the composite store from the nearest composite container.
 * @example
 * function CompositeItem() {
 *   const store = useCompositeContext();
 *
 *   if (!store) {
 *     throw new Error("CompositeItem must be wrapped in CompositeProvider");
 *   }
 *
 *   // Use the store...
 * }
 */
export const useCompositeContext = ctx.useContext;
useCompositeContext.displayName = "useCompositeContext";

export const useCompositeScopedContext = ctx.useScopedContext;

export const useCompositeProviderContext = ctx.useProviderContext;

export const CompositeContextProvider = ctx.ContextProvider;
CompositeContextProvider.displayName = "CompositeContextProvider";

export const CompositeScopedContextProvider = ctx.ScopedContextProvider;
CompositeScopedContextProvider.displayName = "CompositeScopedContextProvider";

interface ItemContext {
  baseElement?: HTMLElement;
  id?: string;
}

export const CompositeItemContext = createContext<ItemContext | undefined>(
  undefined,
);
CompositeItemContext.displayName = "CompositeItemContext";

interface RowContext extends ItemContext {
  ariaSetSize?: number;
  ariaPosInSet?: number;
}

export const CompositeRowContext = createContext<RowContext | undefined>(
  undefined,
);
CompositeRowContext.displayName = "CompositeRowContext";
