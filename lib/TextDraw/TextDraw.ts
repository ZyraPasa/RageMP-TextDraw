import { ITextDraw } from "lib/TextDraw/ITextDraw";

let textDraws: ITextDraw[] = [];

export class TextDraw implements ITextDraw {
  // #textDraw: any;
  tagName: string;
  isShow: boolean = false;
  text: string;
  position: Array2d | Array3d;
  data?: {
    font: 1 | 2 | 3 | 4 | 7;
    centre?: boolean | undefined;
    color: RGBA;
    scale: Array2d;
    outline: boolean;
  };
  constructor(
    tagName: string,
    text: string,
    position: Array2d | Array3d,
    data?: {
      font: 1 | 2 | 3 | 4 | 7;
      centre?: boolean | undefined;
      color: RGBA;
      scale: Array2d;
      outline: boolean;
    },
    show?: boolean
  ) {
    this.tagName = tagName;
    this.text = text;
    this.position = position;
    this.data = data;
    if (show) {
      this.show();
    }
    textDraws.push(this);
  }
  show(): void {
    // this.#textDraw = mp.game.graphics.drawText(this.text, this.position, this.data);
    this.isShow = true;
  }
  hide(): void {
    // this.#textDraw = undefined;
    this.isShow = false;
  }
}

export { textDraws };
