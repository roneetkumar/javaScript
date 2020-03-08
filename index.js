// Classes Practices

class Elements {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Elements {
    constructor(name, buildYear, area, noOfTrees) {
        super(name, buildYear);
        this.area = area;
        this.noOfTrees = noOfTrees;
    }
    treeDensity() {
        const density = this.noOfTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Elements {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear} is a ${classification.get(this.size)} street.`)
    }
}

const allParks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541)
];
const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('EverGreen Street', 2009, 2.7)
];

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportParks(park) {
    console.log('\t\t---Parks-Report---\n');
    park.forEach(el => el.treeDensity());
    const ages = park.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${park.length} parks have an average of ${avgAge} years.`);
    const i = park.map(el => el.noOfTrees).findIndex(el => el >= 1000);
    console.log(`${park[i].name} has more than 1000 trees`);
}

function reportStreets(street) {
    console.log('\n\t\t---Streets-Report---\n');

    const [totalLength, avgLength] = calc(street.map(el => el.length));
    console.log(`Our${street.length} streets have a total length of ${totalLength} km, with an averageof ${avgLength} km.`)

    street.forEach(el => el.classifyStreet());

}

reportParks(allParks);
reportStreets(allStreets);
