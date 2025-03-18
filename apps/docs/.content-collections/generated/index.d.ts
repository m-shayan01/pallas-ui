import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Guide = GetTypeByName<typeof configuration, "guides">;
export declare const allGuides: Array<Guide>;

export {};
