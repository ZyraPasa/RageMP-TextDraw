import { textDraws } from "lib/TextDraw/TextDraw";

export class TextDrawServices {
  static tagNameToIndex(tagName: string): number {
    return textDraws.findIndex((td) => td.tagName === tagName);
  }
  static removeTextDraw(tagName: string): void {
    const textDrawIndex: number = this.tagNameToIndex(tagName);
    if (textDrawIndex === -1) return;
    textDraws[textDrawIndex].hide();
    textDraws.splice(textDrawIndex, 1);
  }
  static hideTextDraw(tagName: string): void {
    const textDrawIndex: number = this.tagNameToIndex(tagName);
    if (textDrawIndex === -1) return;
    textDraws[textDrawIndex].hide();
  }
  static showTextDraw(tagName: string): void {
    const textDrawIndex: number = this.tagNameToIndex(tagName);
    if (textDrawIndex === -1) return;
    textDraws[textDrawIndex].show();
  }
  static updateText(tagName: string, text: string): void {
    const textDrawIndex: number = this.tagNameToIndex(tagName);
    if (textDrawIndex === -1) return;
    textDraws[textDrawIndex].text = text;
  }
}
