declare module 'styled-system/css' {
  export function cx(...classNames: (string | undefined)[]): string;
  export function css(styles: any): string;
}

declare module 'styled-system/jsx' {
  import { ElementType } from 'react';
  
  export function styled<T extends ElementType>(
    component: T,
    styles?: any,
    options?: any
  ): T;
  
  export function isCssProperty(prop: string): boolean;
  
  export type StyledComponent<T> = T;
}