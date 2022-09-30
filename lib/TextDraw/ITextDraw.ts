export interface ITextDraw {
  tagName: string;
  isShow: boolean;
  text: string;
  position: Array2d | Array3d;
  data?: {
    font: 1 | 2 | 3 | 4 | 7;
    centre?: boolean | undefined;
    color: RGBA;
    scale: Array2d;
    outline: boolean;
  };
  show: () => void;
  hide: () => void;
}
