import { Person, getAge } from './modules';

const user = new Person('Mohamed', 'Salah', new Date(1992, 5, 15)); // 15-06-1992
const fullName = user.getName();
const age = getAge(user.getBirthdate());

console.log(fullName);
console.log(age);

import { sum } from './modules';

console.log(sum(1, 2));