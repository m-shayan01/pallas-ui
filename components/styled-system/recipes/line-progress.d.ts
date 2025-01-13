/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface LineProgressVariant {
  /**
 * @default "butt"
 */
strokeLinecap: "butt" | "round"
/**
 * @default "md"
 */
size: "sm" | "md" | "lg"
}

type LineProgressVariantMap = {
  [key in keyof LineProgressVariant]: Array<LineProgressVariant[key]>
}

export type LineProgressVariantProps = {
  [key in keyof LineProgressVariant]?: ConditionalValue<LineProgressVariant[key]> | undefined
}

export interface LineProgressRecipe {
  __type: LineProgressVariantProps
  (props?: LineProgressVariantProps): Pretty<Record<"root" | "label" | "track" | "fill", string>>
  raw: (props?: LineProgressVariantProps) => LineProgressVariantProps
  variantMap: LineProgressVariantMap
  variantKeys: Array<keyof LineProgressVariant>
  splitVariantProps<Props extends LineProgressVariantProps>(props: Props): [LineProgressVariantProps, Pretty<DistributiveOmit<Props, keyof LineProgressVariantProps>>]
  getVariantProps: (props?: LineProgressVariantProps) => LineProgressVariantProps
}

/**
 * Styles for the LineProgress component


 */
export declare const lineProgress: LineProgressRecipe