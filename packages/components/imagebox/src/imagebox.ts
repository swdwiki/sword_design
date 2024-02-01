import type { ExtractPropTypes } from "vue";
import type Imagebox from "./imagebox.vue";

export interface ImageboxProps {
  images: Array<string>;
  imgSize?: number;
  slotFullPreview: boolean;
}

export interface ImagePreviwerProps {
  images: Array<string>;
  selectImgIndex: number;
}

export interface ImageToolsProps {
  image: string;
  imgSize: number;
  showNext: boolean;
  showPrev: boolean;
  imgPreview: boolean;
}

export type ImageboxPropsType = ExtractPropTypes<ImageboxProps>;
export type ImageToolPropsType = ExtractPropTypes<ImageToolsProps>;
export type ImageboxInstance = InstanceType<typeof Imagebox>;
