const mapArrToString = require('./mapArrToString')

test('mapArrToString should return correct data if passed arr filled with integers', () => {
    expect(mapArrToString([2, 48, 98])).toEqual(['2', '48', '98'])
})

test('mapArrToString should return correct data if passed arr filled with integers and fractional numbers', () => {
    expect(mapArrToString([2, 48, 98.89])).toEqual(['2', '48'])
})

test('mapArrToString should return correct data if passed arr filled with integers, fractional numbers and some string', () => {
    expect(mapArrToString(['a', 48, 98.89])).toEqual(['48'])
})

test('mapArrToString should return correct data if passed arr is an empty array', () => {
    expect(mapArrToString([])).toEqual([])
})

test('mapArrToString should return undefined if passed data is not array', () => {
    expect(mapArrToString(48)).toBeUndefined()
})