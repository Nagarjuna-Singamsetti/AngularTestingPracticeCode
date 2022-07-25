export function addition(num1: number, num2: number) {
    return num1 + num2;
}
export function subtraction(num1: number, num2: number) {
    return num1 - num2;
}
export function compute(num: number) {
    if (num < 0)
        return 0;
    else
        return num + 1;
}
export function hello(name:string) {
    return 'Welcome ' + name;
}