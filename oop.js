

class Person {

    static person_data = []
    constructor(name, age, gender, salary) {
        this.name = name
        this.age = age
        this.gender = gender === 1 ? "Male" : "Female"
        this.salary = salary
        
        
        Person.person_data.push(this)
    }

    introduce_self() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }

    say_details() {
        console.log(`I earn $${this.salary} and I am a ${this.gender}`)
    }

    static display_all_persons() {
        console.log(Person.person_data.length)
        for (let person of Person.person_data) {
            person.introduce_self();
            person.say_details();
        }
    }
}

const person1 = new Person("Jolie Belle Xavier", 20, 2, 200000);
const person2 = new Person("Jonathan Gordon", 20, 1, 500000)
const person3 = new Person("Jenna Louise", 19, 2, 450000)

Person.display_all_persons()
/*
person.introduce_self();
person.say_details();
*/