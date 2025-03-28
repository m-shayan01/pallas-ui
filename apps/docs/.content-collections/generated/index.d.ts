import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Guide = GetTypeByName<typeof configuration, "guides">;
export declare const allGuides: Array<Guide>;

export type Component = GetTypeByName<typeof configuration, "components">;
export declare const allComponents: Array<Component>;

export type Theming = GetTypeByName<typeof configuration, "theming">;
export declare const allThemings: Array<Theming>;

export {};
