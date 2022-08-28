export const constructCode = `
        const Person = function(firstName, birthYear) {
            this.firstName = firstName
            this.birthYear = birthYear

            // Never do this!!!
            this.calcAge = function() {
                console.log(2037 - this.birthYear)
            }
        }

        const jarett = new Person('Jarett', 1980)

        console.log(jarett) // Person {firstName: "Jarett", birthYear: 1980}

`;

export const protoCode = `
        Person.prototype.calcAge = function() {
            console.log(2037 - this.birthYear);
        };

        jarett.calcAge() // 57

        console.log(jarett.__proto__) // Displays the prototype of jarett

        console.log(jarett.__proto__ === Person.prototype); // true

        // Person.prototype is not the prototype of Person, it is what will be used
        // as the prototype of all the objects created from the class.

`;

export const classCode = `
        // class expression
        const Person = class {
            // Same as below
        }

        // class declaration
        class Person {
            constructor(firstName,birthYear) {
                this.firstName = firstName
                this.birthYear = birthYear
            }

            calcAge() {
                console.log(2037 - this.birthYear)
            }
        }

        const jarett = new Person("Jarett", 1980)
        jarett.calcAge() // 57

`;

export const getterCode1 = `
        const account = {
            owner: 'Jarett',
            movements: [200, 530, 120, 300],

            get latest() {
                return this.movements.slice(-1).pop();
            }

            set latest(mov) {
                this.movement.push(mov)
            }
        }

        console.log(account.latest) // 300

        account.latest = 50
        console.log(account.movements) // [200, 530, 120, 300, 50]

`;

export const getterCode2 = `
        class Person {
            constructor(fullName, birthYear) {
                this.fullName = fullName;
                this.birthYear = birthYear
            }

        calcAge() {
            console.log(2037 - this.birthYear)
        }

        // Setting a property that already exists

        set fullName(name) {
            if(name.includes(' ')) this._fullName = name
            else alert(\`\${name} is not a full name\`)
        }

        get fullName() {
            return this._fullName
        }

        }

        const jarett = new Person('Jarett Young',1980)
        

`;
