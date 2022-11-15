import { prettyPrice } from "./helper.js";
import Painting from "./Painting.js";

class Painter {
  fName;
  lName;
  fullName;
  style;
  listOfPaintings;

  constructor(fName, lName, style) {
    this.fName = fName;
    this.lName = lName;
    this.fullName = `${fName} ${lName}`;
    this.style = style;
    this.listOfPaintings = [];
  }

  addPainting(name, canvasSize, price) {
    this.listOfPaintings.push(new Painting(name, canvasSize, price));
  }

  printHtml() {
    let result = "";
    result += `<h1>${this.fullName}</h1>\n<h2>${this.style}</h2>\n`;
    result += `<ul>\n`;

    for (let i = 0; i < this.listOfPaintings.length; i++) {
      const tab = "    ";

      result += `${tab}<li>\n`;
      result += `${tab}${tab}name: <span>${this.listOfPaintings[i].name}</span><br>\n`;
      result += `${tab}${tab}canvas: <em>${this.listOfPaintings[i].canvasSize}</em><br>\n`;
      result += `${tab}${tab}price: <strong>${prettyPrice(
        this.listOfPaintings[i].price
      )}</strong>\n`;
      result += `${tab}</li>\n`;
    }

    result += `</ul>\n`;

    return result;
  }
}

export default Painter;
