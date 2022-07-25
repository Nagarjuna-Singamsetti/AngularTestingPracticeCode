describe('Testing String Matchers', () => {
  it('Testing String using "toBe" Matcher', () => {
    let myString = "RSK Helpline";
    expect(myString).toBe("RSK Helpline")
  });
  it('Testing String using "toEqual" Matcher', () => {
    let myString = "RSK Helpline";
    expect(myString).toEqual("RSK Helpline")
  });
  it('Testing String using "toContain" Matcher', () => {
    let myString = "RSK Helpline";
    expect(myString).toContain("RSK")
  });
  it('Testing String using "toMatch" Matcher', () => {
    let myString = "RSK Helpline video-6";
    expect(myString).toMatch(/\d+/)
  });
})