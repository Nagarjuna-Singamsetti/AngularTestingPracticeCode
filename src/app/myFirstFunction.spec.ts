import { addition, compute, hello, subtraction } from "./myFirstFunction"

describe('Test Functions', () => {
    it('Testing Addition Function', () => {
        expect(addition(25, 20)).toBe(45);
    });
    it('Testing Subtraction Function', () => {
        expect(subtraction(25, 20)).toBe(5);
    });
});

describe('Testing Compute Function', () => {
    it('Test if Number < 0', () => {
        expect(compute(-5)).toBe(0);
    });
    it('Test if Number > 0', () => {
        expect(compute(6)).toBe(7);
    });
});

describe('Testing String Function', () => {
    it('Test Hello Function', () => {
        expect(hello('Nagarjuna')).toContain('Welcome Nagarjuna')
    });
})