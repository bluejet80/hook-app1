export const code1 = `
    const apples = [3,4,5,6]
    const grapes = apples.slice(2)
    console.log(apples)
    console.log(grapes)

`;

export const conversionCode = `
    const num1 = '12' + 3 + 2   // This will produce the string '1232'
    const num2 = 45 + '13' - 12 // This will produce the number 4501
    const num3 = '24' - '3' - '10' // This will produce the number 11

`;

export const tempLit1 = `
    console.log("Hey there " + firstName + ", its " + dayOfWeek + " and I am hungry")

`;

export const tempLit2 = `
    console.log("Hey there", firstName, ", its", dayOfWeek, "and I am hungry")

`;

export const tempLit3 = `
    console.log(\`Hey there \${firstName}, its \${dayOfWeek} and I am hungry\`)

`;

export const equalCode = `
    const boolean1 = '10' == 10 // this will register as true.
    const boolean2 = '10' === 10 // this will register as false.

`;

export const switchCode = `
    switch(expression) {
      case x:
        // code block
        break;
      case y:
        // code block
        break;
      default:
        // code block
    }

`;

export const ternaryCode1 = `
    const age = 23;
    age >= 18 ? console.log(\`I can drink beer.\`) : console.log(\`I must drink water\`);
    // This would print 'I can drink beer.' to the console. 

`;

export const ternaryCode2 = `
    const age = 23;
    const drink = age >= 18 ? 'wine' : 'water';
    console.log(drink)

`;

export const functCode1 = `
    function fruitProcessor(apples, oranges) {
        console.log(apples, oranges);
        const juice = \`Juice with \${apples} apples and \${oranges} oranges.\`;
        return juice;
    }

    const appleJuice = fruitProcessor(3. 4);
    console.log(appleJuice) // prints juice to the console

`;

export const functCode2 = `
    const calcAge = function (birthYear) {
        return 2037 - birthYear;
    }

    export const age1 = calcAge(1991)
    console.log(age1);

`;

export const arrowCode1 = `
    const calcAge2 = function (birthYear) {
        return 2037 - birthYear;
    }

    const age2 = calcAge2(1991)
    console.log(age2); //prints 46

    // Arrow Function

    const calcAge3 = birthYear => 2037 - birthYear

    const age3 = calcAge3(1930);
    console.log(age3); //prints 107

    // more complex arrow function
    const yearUntilRetirement = (birthYear, firstName) => {
        const age = 2037 - birthYear;
        const retirement = 65 - age;
        return \`\${firstName} retires in \${retirement} years.\`
    }

    console.log(yearUntilRetirement(1991, 'Jimmy'));

`;

export const sortCode = `
    const array1 = [4,6,8,22,1,12,-1,-4]

    array.sort((a,b)=>a-b) // returns [-4, -1, 1, 4, 6, 8, 12, 22]

    array.sort((a,b)=>b-a) // returns [22, 12, 8, 6, 4, 1, -1, -4]

`;
