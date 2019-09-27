// let Person = (function () {
//     let name = 'Roneet';
//     let age = 33;

//     return {
//         getName: () => name,
//         setName: (value) => name = value
//     }
// })();

// console.log(Person.name);
// Person.setName("Kumar");
// console.log(Person.getName());

// class Person {
//     constructor() {
//         let name = 'Roneet';
//         this.getName = () => name;
//         this.setName = (value) => name = value;
//     }
// };

// const per = new Person()

// per.setName("hello")
// console.log(per.getName());



// class Parent {
//     constructor(name, age, height) {
//         this.name = name;
//         this.age = age;
//         this.height = height;
//     }

//     speak() {
//         console.log(this.name, this.age, this.height);
//     }
// }


// class ChildClass extends Parent {
//     constructor(name, age, height, weight) {
//         super(name, age, height);
//         this.weight = weight;
//     }
//     speak() {
//         console.log(this.name, this.age, this.height, this.weight);
//     }
// }

// let parent = new Parent("Person", 21, 5.7, 70);


// let child = new ChildClass("Person2", 21, 5.7, 70);

// parent.speak();

// child.speak();


function modifyArray(nums) {


    nums = nums.map(i => {
        if (i % 2 == 0) {
            return i + i
        } else if (i % 3 == 0) {
            return i + i + i
        }
    });
    return nums;
}

let arr = [1, 2, 3, 4, 5];

console.log(modifyArray(arr));



