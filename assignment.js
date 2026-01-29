class Animal {
    constructor(leg_count, nutrition, habitat, age, gender, name, species) {
        this.l_count = leg_count;
        this.nutri = nutrition;
        this.habit = habitat;
        this.age = age;
        this.sex = gender;
        this.name = name;
        this.species = species;
    }

    eat(a) {
        let has_eaten = a;
        return a === 1 ? true : false;
    }
}


class Human extends Animal {
    constructor(nationality, faith, address) {
        super(leg_count, nutrition, habitat, age, gender, name, species)
        this.nationality = nationality
        this.faith = faith
        this.address = address
    }

    speak () {
        while (true) {
            console.log("This Human is Speaking!!!")
        }
    }
}
/*
const harambe = new Animal(2,"omnivore", "rain forest", 10, "male", "Harambe", "gorilla" );
function print_details (animal) {
    for (const [key, value] of Object.entries(animal)) {
        console.log(`${key}: ${value}`);
    }
}

print_details(harambe);
*/
const Person = new Human(2, "Omnivores", "Land", 25, "Male", "HomoSapiens", "Cameroonian", "Church", "{Town: 'Bamenda', Street: 'Old Town Road'}")
Person.speak()
