# SVG_Logo_Maker

## Your Task

Your task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG fileThe application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Mock-Up

The following image shows a mock-up of the generated SVG given the following input entered by the user: `JIM` for the text, `white` for the text color, `circle` from the list of shapes, and `Black` for the shape color.

![Image showing a black circle with white text that reads "JIM.".](/homework/SvgLogoMaker/lib/mySvgLogo.svg)

![video of creating svg file](/homework/SvgLogoMaker/demo.webm)

- demo video link: https://drive.google.com/file/d/1v6J6vhAKFp9WTUxR3c7xiFtw9sQ0y_Xt/view

## Helpful SVG Resources

- [Example SVG](https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg)

- [Scalable Vector Graphics (SVG)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)

- [SVG tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

- [Basic SVG shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)

- [Text in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts)

- [SVG VS Code extension](https://marketplace.visualstudio.com/items?itemName=jock.svg)

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
