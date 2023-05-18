class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  getArea() {
    return this.sideA * this.sideB;
  }

  getPerimeter() {
    return 2 * (this.sideA + this.sideB);
  }

  isSquare() {
    return this.sideA === this.sideB;
  }
}
