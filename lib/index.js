const inquirer = require("inquirer");
const fs = require("fs");
const fileName = "mySvgLogo.svg";

const { Circle, Triangle, Square } = require("./shapes");

questions = [
  {
    type: "input",
    message: "Give 3 characters",
    name: "text",
    validate: function (input) {
      if (input.length !== 3) {
        return "please enter exactly 3 characters";
      }
      return true;
    },
  },
  {
    type: "list",
    message: "Choose a text color",
    name: "textcolor",
    choices: ["red", "green", "blue"],
  },
  {
    type: "list",
    message: "Choose a shape",
    name: "shape",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "list",
    message: "Choose a shape color",
    name: "shapecolor",
    choices: ["red", "green", "blue"],
  },
];

function svgLayout(svg) {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${svg} </svg>`;
}

async function createSvg() {
  return new Promise((resolve) => {
    inquirer
      .prompt(questions)
      .then(({ text, textcolor, shape, shapecolor }) => {
        switch (shape) {
          case "circle":
            shape = new Circle(text, textcolor, shape, shapecolor);

            break;
          case "triangle":
            shape = new Triangle(text, textcolor, shape, shapecolor);

            break;
          case "square":
            shape = new Square(text, textcolor, shape, shapecolor);

            break;
        }

        console.log(shape.shapecolor);
        console.log(shape);
        const svg = shape.render();

        resolve(svgLayout(svg));
      });
  });
}

/* return createLogo(answers); */

async function writeToFile(fileName, fileContent) {
  fs.writeFile(fileName, fileContent, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
  );
}

async function init() {
  const svgFinal = await createSvg(questions);
  writeToFile(fileName, svgFinal);
}

init();

module.exports = index;
