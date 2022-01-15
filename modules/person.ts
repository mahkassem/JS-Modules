import { sub } from './';
import IPerson from '../models/iperson';
export default class Person implements IPerson {
    // Create a new instance of Person
    protected firstName: string;
    protected lastName: string;
    protected birthdate: Date;

    constructor(firstName: string, lastName: string, birthdate: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
    }

    // Get the full name of a person
    getName = (): string => {
        return `${this.firstName} ${this.lastName}`;
    }

    // Get the birthdate of a person
    getBirthdate = (): Date => {
        return this.birthdate;
    }

    // Set the first name of a person
    setFirstName = (firstName: string): void => {
        this.firstName = firstName;
    }

    // Set the last name of a person
    setLastName = (lastName: string): void => {
        this.lastName = lastName;
    }

    // Set the birthdate of a person
    setBirthdate = (birthdate: Date): void => {
        this.birthdate = birthdate;
    }
}

export const getAge = (birthdate: Date): number => { // birthday is a date
    var ageDifMs = sub(Date.now(), birthdate.getTime());
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(sub(ageDate.getUTCFullYear(), 1970));
}