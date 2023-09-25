import calculator from "./calculator";

const { add,subtract,multiply,division} = calculator
test('verify addition of two number',() => {
     expect(add(1,2)).toBe(3);
})


test('verify subtraction of two number',() => {
    expect(subtract(1,2)).toBe(-1);    
})

test('verify multiplication of two number',() => {
    expect(multiply(3,4)).toBe(12);    
})

test('verify division of two number',() => {
    expect(division(4,2)).toBe(2);    
})