import { addition, subtraction } from "./myFirstFunction"

describe('Test Functions',()=>{
    it('Testing Addition Function',()=>{
        expect(addition(25,20)).toBe(45);
    });
    it('Testing Subtraction Function',()=>{
        expect(subtraction(25,20)).toBe(5);
    });
})