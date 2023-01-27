const validateValue = require('./validateValue')

test('validateValue should return true if passed value is in the needed range', () => {
    expect(validateValue(50)).toBe(true)
})

test('validateValue should return false if passed value is 0', () => {
    expect(validateValue(0)).toBe(false)
})

test('validateValue should return false if passed value is 100', () => {
    expect(validateValue(100)).toBe(false)
})

test('validateValue should return false if passed value < 0', () => {
    expect(validateValue(-1)).toBe(false)
})

test('validateValue should return false if passed value > 100', () => {
    expect(validateValue(101)).toBe(false)
})