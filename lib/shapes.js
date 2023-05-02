class Shape {
  constructor(text, textcolor, shape, shapecolor) {
    (this.text = text),
      (this.textcolor = textcolor),
      (this.shape = shape),
      (this.shapecolor = shapecolor);
  }
}

class Circle extends Shape {
  constructor(text, textcolor, shape, shapecolor) {
    super(text, textcolor, shape, shapecolor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapecolor}"/>
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text> `;
  }
}
class Triangle extends Shape {
  constructor(text, textcolor, shape, shapecolor) {
    super(text, textcolor, shape, shapecolor);
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}" /> <text x="146" y="155" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`;
  }
}
class Square extends Shape {
  constructor(text, textcolor, shape, shapecolor) {
    super(text, textcolor, shape, shapecolor);
  }
  render() {
    return `<rect x="10" y="10" width="150" height="150" fill="${this.shapecolor}"/>
    <text x="83" y="100" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>`;
  }
}

module.exports = { Circle, Triangle, Square };
