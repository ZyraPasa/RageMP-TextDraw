Event.listen(
  "newTextDraw",
  (
    tagName: string,
    text: string,
    position: Array2d | Array3d,
    data?: { font: 1 | 2 | 3 | 4 | 7; centre?: boolean | undefined; color: RGBA; scale: Array2d; outline: boolean },
    show: boolean = true
  ) => {
    new TextDraw(tagName, text, position, data, show);
  }
);

Event.listen("deleteTextDraw", (tagName: string) => {
	// TextDrawServices
});

Event.listen("updateTextDrawText", (tagName: string, newText: string) => {
	// TextDrawServices
});

Event.listen("hideTextDraw", (tagName: string) => {
	// TextDrawServices
});

Event.listen("showTextDraw", (tagName: string) => {
	// TextDrawServices
});

Event.listen("render", () => {
  if (!textDraws.length) return;
  textDraws.forEach((textDraw: ITextDraw) => {
    if (!textDraw.isShow) return;
    mp.game.graphics.drawText(textDraw.text, textDraw.position, textDraw.data);
  });
});
