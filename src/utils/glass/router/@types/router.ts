import { IRoute } from "./route";

export interface IRouterOptions {
  routes: Array<IRoute>;
  mode: "history" | "hash";
  base: string;
  forceRefresh: false;
  getUserConfirmation: Window["confirm"];
  hashType: "slash" | "noslash" | "hashbang";
  keyLength: number | undefined;
  linkActiveClass: string;
  linkExactActiveClass: string;
  middleware: boolean;
  scrollBehavior: (savedPosition: { x: number; y: number }) => void;
}

export interface IRouterProps {
  basename?: string;
  hashType?: "slash" | "noslash" | "hashbang" | undefined;
  getUserConfirmation?: (message?: string | undefined) => boolean;
  forceRefresh?: boolean;
  keyLength?: number | undefined;
  history?: any;
}

export interface MiddlwareContext {
  to: IRoute;
  from: IRoute;
  next: Function;
}

declare global {
  export interface Window {
    $route: any;
  }
}
