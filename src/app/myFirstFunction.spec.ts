import { addition, compute, hello, subtraction } from "./myFirstFunction"

xdescribe('Test Functions', () => {
    it('Testing Addition Function', () => {
        expect(addition(25, 20)).toBe(45);
    });
    xit('Testing Subtraction Function', () => {
        expect(subtraction(25, 20)).toBe(5);
    });
});

xdescribe('Testing Compute Function', () => {
    it('Test if Number < 0', () => {
        expect(compute(-5)).toBe(0);
    });
    it('Test if Number > 0', () => {
        expect(compute(6)).toBe(7);
    });
});

xdescribe('Testing String Function', () => {
    it('Test Hello Function', () => {
        expect(hello('Nagarjuna')).toContain('Welcome Nagarjuna')
    });
})