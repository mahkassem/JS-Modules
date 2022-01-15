import { Person, getAge } from './modules';

let user = new Person('Mohamed', 'Salah', new Date(1992, 5, 15)); // 15-06-1992
let fullName = user.getName();
let age = getAge(user.getBirthdate());

console.log(fullName);
console.log(age);

import { sum } from './modules';

console.log(sum(1, 2));