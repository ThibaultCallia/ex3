import Painter from "./modules/Painter.js";
import Painting from "./modules/Painting.js";

const painter1 = new Painter("Salvador", "Dali", "Surrealism");
painter1.addPainting("The Persistence of Memory", "24x33", 50000000);
painter1.addPainting("The Temptation of St. Anthony", "90x119.5", 6000000);
painter1.addPainting("The Great Masturbator", "110x150", "unknown");

console.log(painter1);
console.log(painter1.printHtml());
