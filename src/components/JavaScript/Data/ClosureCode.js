export const curryCode1 = `
    //instead of this code
    let sum = (a,b) => a + b
    //Write this:
    let sum = a => b=> a + b
    // It seems almost insignificant but the second way is equal to this:
    function sum(a) {
        return function (b) {
            return a + b
        }
    }
    
`;

export const curryCode2 = `
    let add10 = sum(10)
    lex x = add10(5) // 15
    //How is this helpful?
    // Lets say you have a list of numbers and you want to add a number to them all...
    let adders = [1,3,5].map(item => sum(item))
    adders.map(fn => fn(5)) // 6, 8, 10

`;
