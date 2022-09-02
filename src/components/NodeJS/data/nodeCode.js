export const sysArgs = `
        const ArgList = process.argv.slice(2)

`;

export const dirCode = `
        console.log(__dirname) // shows the current working directory

`;

export const commonJSCode1 = `
        const circle = require('./circle.js');
        console.log(\`The area of a circle of radius 4 is $\{circle.area(4)\}\`);

`;

export const commonJSCode2 = `
        const { PI } = Math;
        exports.area = (r) => PI * r ** 2;
        exports.circumference = (r) => 2 * PI * r;

`;

export const commonJSCode3 = `
        const Square = require('./square.js');
        const mySquare = new Square(2);
        console.log(\`The area of mySquare is $\{mySquare.area()\}\`);

`;

export const commonJSCode4 = `
        // Assigning to exports will not modify module, must use module.exports
        module.exports = class Square {
                constructor(width) {
                this.width = width;
                }

                area() {
                return this.width ** 2;
                }
        };
`;

export const commonJSCode5 = `
        const getBlogTitle = (name, author) => {
        return name + " by " + author;
        }
        modules.export = getBlogTitle;

`;

export const esModuleCode1 = `
        cosnt func1 = (arg) => {arg * 16}

        export default func1

`;

export const esModuleCode2 = `
        export const funct2 = (item) {
                return item + item
        }

`;

export const esModuleCode3 = `
        import {default as funct1} from "./esModule1.js"

`;

export const esModuleCode4 = `
        import {funct2} from "./esModule2.js"

`;
