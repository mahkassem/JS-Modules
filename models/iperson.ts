export default interface IPerson {
    getName(): string;
    getBirthdate(): Date;
    setFirstName(firstName: string): void;
    setLastName(lastName: string): void;
    setBirthdate(birthdate: Date): void;
}