import capatalize from "./captalize";

test('check if string has been capatlized', () => {
   expect(capatalize('hello')).toBe('Hello');
   expect(capatalize('sahil')).toBe('Sahil');
})