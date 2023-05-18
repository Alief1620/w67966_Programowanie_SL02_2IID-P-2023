const rectangle = {
  firstLine: 12,
  secondLine: this.firstLine,
  thirdLine: 12,
  fourthLine: this.thirdLine,
  isSquare: function () {
    return this.firstLine === this.thirdLine;
  },
  getSquare: function () {
    return this.firstLine * this.thirdLine;
  },
  getPerimeter: function () {
    return 2 * (this.firstLine + this.thirdLine);
  },
};

console.log(rectangle.isSquare());
console.log(rectangle.getSquare());
console.log(rectangle.getPerimeter());
