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

export const staticCode1 = `
        const Person = function(firstName, birthYear) {
            this.firstName = firstName
            this.birthYear = birthYear 
            
            }

        //static method

        Person.hey = function() {
            console.log("hello")
        }

        Person.hey() // hello

        // Cannot do 

        jarett.hey() // error

`;

export const staticCode2 = `
        class Person {
            constructor(fullName, birthYear) {
                this.fullName = fullName;
                this.birthYear = birthYear
            }

        calcAge() {
            console.log(2037 - this.birthYear)
        }

        static hey() {
            console.log("hello")
        }

    }

`;

export const objectCode1 = `
        const PersonProto = {
            calcAge() {
                console.log(2037 - this.birthYear)
            },
            init(firstName, birthYear) {
                this.firstName = firstName;
                this.birthYear = birthYear
            }
        }

        const steven = Object.create(PersonProto)
        steven.init("steven",1955)
        steven.calcAge() // 82

`;

export const classInhereit1 = `

        // Parent Class
        const Person = function(firstName, birthYear) {
            this.firstName = firstName
            this.birthYear = birthYear       
        };

        Person.prototype.calcAge = function() {
            console.log(2037 - this.birthYear);
        };

        //Child Class
        const Student = function(firstName, birthYear, course) {
            Person.call(this, firstName, birthYear) //sets the this keyword of Person to the current subclass.
            this.course = course
        }

        // Linking Prototypes
        Student.prototype = Object.create(Person.prototype) // must be done before adding other methods

        Student.prototype.introduce = function() {
            console.log(\`My name is $\{this.firstName\} and I study $\{this.course\}.)
        }

        const mike = new Student('Mike',2020, 'Computer Science');

        mike.introduce() // My name is Mike and I study Computer Science.

        mike.calcAge() // 17 - using the method from parent class

        //Javascript now thinks that the constructor for Student is Person, so to fix that we 
        // need to do this

        Student.prototype.constructor = Student


`;

export const es6Inherit = `

        //Parent Class
        class Person {
            constructor(fullName, birthYear) {
                this.fullName = fullName;
                this.birthYear = birthYear
            }

        calcAge() {
            console.log(2037 - this.birthYear)
        }

        get age() {
            return 2037 - this.birthYear
        }

        // Setting a property that already exists
        // have to use underscore.

        set fullName(name) {
            if(name.includes(' ')) this._fullName = name
            else alert(\`\${name} is not a full name\`)
        }

        get fullName() {
            return this._fullName
        }

        // Static method
        static hey() {
            console.log("hello")
        }

        }

        //Child Class
        class Student extends Person {
            constructor(fullName, birthYear, course) {
                super(fullName, birthYear) // needs to happen first
                this.course = course
            }

            introduce() {
                console.log(\`My name is $\{this.fullName\} and I study $\{this.course\}.)
            }

            //Polymorphism
            calcAge() {
                console.log(2037 - this.birthYear + 10)
            }


        }

        const jeremy = new Student('Jeremy Rogers', 2012, 'Computer Science')
        jeremy.introduce()
        jeremy.calcAge()


`;

export const objectInherit = `

        //Parent Class
        const PersonProto = {
            calcAge() {
                console.log(2037 - this.birthYear)
            },
            init(firstName, birthYear) {
                this.firstName = firstName;
                this.birthYear = birthYear
            }
        }

        //Child class
        const StudentProto = Object.create(PersonProto)

        //Create init in StudentProto
        StudentProto.init = function(firstName, birthYear, course) {
            PersonProto.init.call(this, firstName, birthYear);
            this.course = course;
        }

        //Create another method
        Student.introduce = function() {
            console.log(\`My name is $\{this.firstName\} and I study $\{this.course\}.)
        }

        //Instance Class
        const jay = Object.create(StudentProto)
        jay.init("Jay", 2010, "Computer Science")

`;
