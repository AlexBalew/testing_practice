const square = require('./square')

describe('square', () => {
    let mockValue = 2
    beforeEach(() => {
        mockValue += 1
    })

    beforeAll(() => {
        mockValue = 3
    })

    test('square should correct data', () => {
        expect(square(mockValue)).toBe(16)
        expect(square(mockValue)).toBeGreaterThan(15)
        expect(square(mockValue)).toBeLessThan(17)
        expect(square(mockValue)).not.toBeUndefined()
    })

})