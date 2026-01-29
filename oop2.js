class Person {
    static person_data = []
    constructor(name, age, gender, salary) {
        this.name = name
        this.age = age
        this.gender = gender === 1 ? "Male" : "Female"
        this.salary = salary

        // Push the whole object instead of a list of values
        Person.person_data.push(this)
    }

    static display_all_persons() {
        for (let p of Person.person_data) {
            // Now you can use p.name instead of p[0]
            console.log(`${p.name} is a ${p.age} year old ${p.gender}`);
        }
    }
}

const person1 = new Person("Jolie Belle Xavier", 20, 2, 200000);
const person2 = new Person("Jonathan Gordon", 20, 1, 500000)
const person3 = new Person("Jenna Louise", 19, 2, 450000)

Person.display_all_persons()