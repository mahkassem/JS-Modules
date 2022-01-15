export const sum = (a: number, b: number): number => {
    return a + b;
}

export const sub = (a: number, b: number): number => {
    return a - b;
}

export const multiply = (a: number, b: number): number => {
    return a * b;
}

export const divide = (a: number, b: number): number => {
    return a / b;
}

export const toHumanFormat = (number: number): string => {
    return number.toLocaleString();
}
