class Human {
    name;
    gender;
    constructor (name, gender){
        this.name=name;
        this.gender=gender;
    }
};
class Apartment  {
    people = [];
    addPeople(human){
        if (human instanceof Human)
        this.people.push(Human);
        
    }
};
class House {
    apartments = [];
    constructor(maxCountApartments){
        this.maxCountApartments = maxCountApartments;
    };

    addApartment (apartment) {
        if (
            this.apartments.length < this.maxCountApartments
        )
        {
            this.apartments.push(apartment);
            return;
        }
        console.log ("Exceeds the maximum number of apartments");
    }
};
const people_1 = new Human ("Ivan", "man");
const people_2 = new Human ("Mia", "woman");
console.log(people_1);
console.log(people_2);
const apartment_1 = new Apartment ();
const apartment_2 = new Apartment();
const house = new House();
apartment_1.addPeople(people_1);
apartment_1.addPeople(people_2);
house.addApartment(apartment_1);
house.addApartment(apartment_2)
console.log(apartment_1)
console.log(house)


