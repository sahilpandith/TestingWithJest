import analyzeArray from "./analyzeArray";

test('test analyzeArray function',() => {
    const {average,min,max,length} = analyzeArray([1,8,3,4,2,6])
    expect(average).toBe(4);
    expect(min).toBe(1);
    expect(max).toBe(8);
    expect(length).toBe(6);
})