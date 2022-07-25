import { addition } from "./myFirstFunction"

describe('Test Addition',()=>{
    it('Testing Addition Function',()=>{
        expect(addition(20,25)).toBe(45);
    })
})