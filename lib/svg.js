class Svg {
  constuctor() {
    this.text = "";
    this.shape = "";
  }
  render() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"> ${this.text} ${this.shape}`;
  }

  setText(textMsg, color) {
    this.text = `<text x="10" y="10" fill="${color}">${textMsg}</text>`;
  }
  setShape(shapeObj) {
    this.shape = shapeObj.render();
  }
}

module.exports = { Svg };
