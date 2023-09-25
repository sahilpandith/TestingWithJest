import caesarCipher from "./caesarCipher";

test('test small case string with alphabetd only',() => {
  expect(caesarCipher('abcdefghi',1)).toBe('bcdefghij')
})

test('test small case string with alphabetd only and containing z',() => {
    expect(caesarCipher('abcdefzhi',1)).toBe('bcdefgaij')
  })

test('test capital case string with alphabetd only',() => {
    expect(caesarCipher('BDG',1)).toBe('CEH')
})

test('test capital case string with alphabetd only and containing z',() => {
    expect(caesarCipher('XYZAF',1)).toBe('YZABG')
})

test('string conataining both small and capital letters inclucing spaces and non alphabets',() => {
    expect(caesarCipher('XYZAF123',2)).toBe('ZABCH123')
    expect(caesarCipher('XYZAF 123 Sahil!',1)).toBe('YZABG 123 Tbijm!')
})