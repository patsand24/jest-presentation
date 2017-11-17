describe("Sample Tests", () => {
  //first test. .toBe is a === test. It is the easiest and most straightforward. It will not check deep equality.
  it("runs a test", ()=> {
    expect(1 + 1).toBe(2)
  })
  
  //to equal will recursively deep equal two objects {a: 1} === {a: 1}
  it("deeply equals two objects", () => {
    const nestedObject = {a: {b: {c: [1,2,3]}}}
    expect(nestedObject).toEqual({a: {b: {c: [1,2,3]}}})
  })

  //the .not qualifier is essentially the ! of equality
  it("returns truthy is two objects are NOT the same", () => {
    const nestedObject = {a: {b: {c: [1,2,3]}}}
    expect(nestedObject).not.toEqual({a: {b: {c: [1,2]}}})
  })

  //other equality tests: .toBeNull .toBeUndefined .toBeDefined .toBetruthy .toBeFalsy
  //any of these tests can be used with .not

  //can run tests that differentiate the value of numbers:
  it('checks if the number is greater than result', () => {
    expect(2 * 10).toBeGreaterThan(19)
  })
  //other number tests: .toBeGreaterThanOrEqual .toBeLessThan .toBeLessThanOrEqual

  //regex tests: tests string to match regex 
  it("compares strings to regex", () => {
    expect("team").not.toMatch(/i/)
  })

  //tests Arrays
  it("finds items in a array", () => {
    expect([1,2,3]).toContain(2)
  })

})
