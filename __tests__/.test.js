const { Circle, Triangle, Square } = require("../lib/shapes.js");

// This is the Jest test
test("makes a rectangle child class from shapes and renders text", () => {
  expect((shape = new Square("JIM", "green", "shape", "blue").render())).toBe(
    (shape = `<rect x="10" y="10" width="150" height="150" fill="blue"/>
    <text x="83" y="100" font-size="60" text-anchor="middle" fill="green">JIM</text>`)
  );
});

test("makes a circle child class from shapes and renders text", () => {
  expect((shape = new Circle("JIM", "green", "shape", "blue").render())).toBe(
    (shape = `<circle cx="150" cy="100" r="80" fill="blue"/>
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="green">JIM</text>`)
  );
});

test("makes a triangle child class from shapes and renders text", () => {
  expect((shape = new Triangle("JIM", "green", "shape", "blue").render())).toBe(
    (shape = `<polygon points="150, 18 244, 182 56, 182" fill="blue" /> <text x="146" y="155" font-size="60" text-anchor="middle" fill="green">JIM</text>`)
  );
});
