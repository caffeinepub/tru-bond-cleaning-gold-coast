declare module "react-helmet-async" {
  import type { ReactNode } from "react";

  export interface HelmetProps {
    children?: ReactNode;
  }

  export interface HelmetProviderProps {
    children?: ReactNode;
    context?: object;
  }

  export function Helmet(props: HelmetProps): JSX.Element | null;
  export function HelmetProvider(props: HelmetProviderProps): JSX.Element;
}
