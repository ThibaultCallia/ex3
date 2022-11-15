class Painting {
  name;
  canvasSize;
  price;

  constructor(name, canvasSize, price = "Unknown") {
    this.name = name;
    this.canvasSize = canvasSize;
    this.price = price;
  }
}

export default Painting;
